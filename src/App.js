import React from 'react';
import './App.css';
import { Route, Switch, Link } from 'react-router-dom';
import { Error} from './components/BasicComponents.js'
import AddMessage from './components/AddMessage.js'
import ViewMessages from './components/ViewMessages.js'
import SignOut from './components/Signout.js'
import HomePage from './components/HomePage.js'
import Contact from './components/Contact.js'
import Portfolio from './components/Portfolio.js'
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
      <Navbar/>
      </Jumbotron>
      
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/addmessage" component={AddMessage} />
        <Route path="/viewmessages" component={ViewMessages} />
        <Route path="/signout" component={SignOut} />
        <Route path="/contact" component={Contact}/>
        <Route path="/portfolio" component={Portfolio}/>
        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;