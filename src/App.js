import React, { useState, useEffect } from 'react';
import './App.css';
import { API, Storage } from 'aws-amplify';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import { listMessages } from './graphql/queries';
import { createMessage as createMessageMutation, deleteMessage as deleteMessageMutation } from './graphql/mutations';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import { Error} from './components/BasicComponents.js'
import Header from './components/Header.js'
import AddMessage from './components/AddMessage.js'
import ViewMessages from './components/ViewMessages.js'
import SignOut from './components/Signout.js'




function App() {


  function Navbar() {
    return (
      <div>
        <Link to="/"> Home </Link>
        <Link to="/addmessage"> Add Message </Link>
        <Link to="/viewmessages"> View Messages </Link>
        <Link to="/signout"> Signout </Link>
      </div>
    )
  }

  return (
    <div className="App">
      <h1>Douglas Davies</h1>
      <h2>Professional Software Engineer</h2>
      <Navbar/>
      <Switch>
        <Route path="/" component={Header} exact />
        <Route path="/addmessage" component={AddMessage} />
        <Route path="/viewmessages" component={ViewMessages} />
        <Route path="/signout" component={SignOut} />
        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;