import React, { useState, useEffect } from 'react';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { API, Storage } from 'aws-amplify';
import { listMessages } from '../graphql/queries';
import { createMessage as createMessageMutation, deleteMessage as deleteMessageMutation } from '../graphql/mutations';
import { Card, Button, Container, CardDeck, Accordion } from 'react-bootstrap';



function ViewMessages(props) {
    const [Messages, setMessages] = useState([]);
    useEffect(() => {
        fetchMessages();
    }, []);

    async function fetchMessages() {
        const apiData = await API.graphql({ query: listMessages });
        const messagesFromAPI = apiData.data.listMessages.items;
        setMessages(apiData.data.listMessages.items);
    }

    async function deleteMessage({ id }) {
        const newMessagesArray = Messages.filter(Message => Message.id !== id);
        setMessages(newMessagesArray);
        await API.graphql({ query: deleteMessageMutation, variables: { input: { id } } });
    }


    return (
        <Container fluid >
            <Accordion>
            {
                Messages.map(Message => (
                        <Card key={Message.id || Message.subject} >
                            <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey={Message.id}>
                                {Message.subject}
                            </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey={Message.id}>
                            <Card.Body>
                                <Card.Title>{Message.email}</Card.Title>
                                <Card.Text>
                                    {Message.body}
                                </Card.Text>
                                <Button variant="primary" onClick={() => deleteMessage(Message)}>Delete Message</Button>
                            </Card.Body>
                            </Accordion.Collapse>

                        </Card>
                ))
            }
            </Accordion>
        </Container>
    )
}

export default withAuthenticator(ViewMessages);

  //Keeping Image Code
/*
await Promise.all(messagesFromAPI.map(async message => {
        if (message.image) {
          const image = await Storage.get(message.image);
          message.image = image;
        }
        return message;
      }))
      */