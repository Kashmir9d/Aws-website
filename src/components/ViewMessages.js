import React, { useState, useEffect } from 'react';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { API, Storage } from 'aws-amplify';
import { listMessages } from '../graphql/queries';
import { createMessage as createMessageMutation, deleteMessage as deleteMessageMutation } from '../graphql/mutations';



function ViewMessages(props){
    const [Messages, setMessages] = useState([]);
    useEffect(() => {
        fetchMessages();
      }, []);

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

      async function deleteMessage({ id }) {
        const newMessagesArray = Messages.filter(Message => Message.id !== id);
        setMessages(newMessagesArray);
        await API.graphql({ query: deleteMessageMutation, variables: { input: { id } }});
      }


    return (
      <div style={{marginBottom: 30}}>
        {
          Messages.map(Message => (
            <div key={Message.id || Message.name}>
              <h2>{Message.name}</h2>
              <p>{Message.description}</p>
              <button onClick={() => deleteMessage(Message)}>Delete Message</button>
              {
                Message.image && <img src={Message.image} style={{width: 400}} />
              }
            </div>
          ))
        }
      </div>
    )
  }

  export default withAuthenticator(ViewMessages);