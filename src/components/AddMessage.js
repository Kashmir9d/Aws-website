import React, { useState, useEffect } from 'react';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { API, Storage } from 'aws-amplify';
import { listMessages } from '../graphql/queries';
import { createMessage as createMessageMutation, deleteMessage as deleteMessageMutation } from '../graphql/mutations';

const initialFormState = { name: '', description: '' }



function AddMessage(props){
    const [Messages, setMessages] = useState([]);
    const [formData, setFormData] = useState(initialFormState);

    async function onChange(e) {
        if (!e.target.files[0]) return
        const file = e.target.files[0];
        setFormData({ ...formData, image: file.name });
        await Storage.put(file.name, file);
        fetchMessages();
      }

      async function fetchMessages() {
        const apiData = await API.graphql({ query: listMessages });
        const messagesFromAPI = apiData.data.listMessages.items;
        await Promise.all(messagesFromAPI.map(async message => {
          if (message.image) {
            const image = await Storage.get(message.image);
            message.image = image;
          }
          return message;
        }))
        setMessages(apiData.data.listMessages.items);
      }

      async function createMessage() {
        if (!formData.name || !formData.description) return;
        await API.graphql({ query: createMessageMutation, variables: { input: formData } });
        if (formData.image) {
          const image = await Storage.get(formData.image);
          formData.image = image;
        }
        setMessages([ ...Messages, formData ]);
        setFormData(initialFormState);
      }


    return (
      <div className="App">
      <input
        onChange={e => setFormData({ ...formData, 'name': e.target.value})}
        placeholder="Message name"
        value={formData.name}
      />
      <input
        onChange={e => setFormData({ ...formData, 'description': e.target.value})}
        placeholder="Message description"
        value={formData.description}
      />
      <input
        type="file"
        onChange={onChange}
      />
      <button onClick={createMessage}>Create Message</button>
      </div>
    )
  }

  export default withAuthenticator(AddMessage);