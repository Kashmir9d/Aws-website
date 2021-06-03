import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import { Error} from './components/BasicComponents.js'
import Header from './components/Header.js'
import AddMessage from './components/AddMessage.js'
import ViewMessages from './components/ViewMessages.js'
import SignOut from './components/Signout.js'
import HomePage from './components/HomePage.js'
import {Button, Jumbotron} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {


  function Navbar() {
    return (
      <div className="container-fluid">
        <Link to="/"> <Button>Home</Button> </Link> 
        <Link to="/portfolio"> <Button>Portfolio</Button> </Link> 
        <Link to="/contact"> <Button>Contact</Button> </Link> 
        <Link to="/addmessage"> <Button>Send Message</Button>  </Link>
        <Link to="/viewmessages"><Button> View Messages</Button> </Link> 
        <Link to="/signout"> <Button>Signout</Button> </Link> 
      </div>
    )
  }

  return (
    <div className="App">
      <Jumbotron fluid>
      <h1>Douglas Davies</h1>
      <h2>Professional Software Engineer</h2>
      <Navbar/>
      </Jumbotron>
      
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/addmessage" component={AddMessage} />
        <Route path="/viewmessages" component={ViewMessages} />
        <Route path="/signout" component={SignOut} />
        <Route path="/contact" />
        <Route path="/portfolio" />
        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;