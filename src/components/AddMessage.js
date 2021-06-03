import React, { useState, useEffect } from 'react';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { API, Auth, Storage } from 'aws-amplify';
import { listMessages } from '../graphql/queries';
import { createMessage as createMessageMutation, deleteMessage as deleteMessageMutation } from '../graphql/mutations';
import { Button, FormControl, InputGroup } from 'react-bootstrap';

const initialFormState = { userId: '', email: '', subject: '', body: '' }



function AddMessage(props) {
  const [Messages, setMessages] = useState([]);
  const [formData, setFormData] = useState(initialFormState);
  var userEmail = '';
  useEffect(() => {
    Auth.currentAuthenticatedUser({
      bypassCache: false  // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
    }).then(user => setFormData({ ...formData, 'userId': user.attributes.email }))
      .catch(err => console.log(err));
    //setFormData({ ...formData, 'userId': "test"})
  }, []);


  async function createMessage() {
    if (!formData.email) {
      console.log("No email address");
      return;
    }


    console.log(formData);
    await API.graphql({ query: createMessageMutation, variables: { input: formData } });
    //if (formData.image) {
    //  const image = await Storage.get(formData.image);
    //  formData.image = image;
    // }
    setMessages([...Messages, formData]);
    setFormData(initialFormState);
  }



  return (
    <div className="App">
      <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Text id="basic-addon1">Email: </InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          onChange={e => setFormData({ ...formData, 'email': e.target.value })}
          placeholder="name@provider.com"
          value={formData.email}
        />
      </InputGroup>

      <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Text id="basic-addon1">Subject: </InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          onChange={e => setFormData({ ...formData, 'subject': e.target.value })}
          placeholder="Subject"
          value={formData.subject}
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Text id="basic-addon1">Message: </InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl as="textarea"
          onChange={e => setFormData({ ...formData, 'body': e.target.value })}
          placeholder="Message..."
          value={formData.body}
        />
      </InputGroup>



      <Button onClick={createMessage}>Send Message</Button>
    </div>
  )
}

export default withAuthenticator(AddMessage);

  //Saving File Addition Code
/*
<FormControl
          type="file"
          onChange={onChange}
        />

 async function onChange(e) {
      if (!e.target.files[0]) return
      const file = e.target.files[0];
      setFormData({ ...formData, image: file.name });
      await Storage.put(file.name, file);
      fetchMessages();
    }


    */
