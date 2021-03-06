import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route, Switch, Link } from 'react-router-dom';
import { Error} from './components/BasicComponents.js'
import AddMessage from './components/AddMessage.js'
import ViewMessages from './components/ViewMessages.js'
import SignOut from './components/Signout.js'
import HomePage from './components/HomePage.js'
import Contact from './components/Contact.js'
import Portfolio from './components/Portfolio.js'
import Resume from './components/Resume.js'
import {Button, Jumbotron, Container} from 'react-bootstrap'





function App() {


  function Navbar() {
    return (
      <Container fluid display="flex" justifyContent="center" alignContent= "space-between">
        <Button className="m-1" variant="info" href="/">Home</Button> 
         <Button className="m-1" variant="info" href="/portfolio">Portfolio</Button>  
        <Button className="m-1" variant="info" href="/contact">Contact</Button>   
        <Button className="m-1" variant="info" href="/resume">Resume</Button> 
        <Button className="m-1" variant="info" href="/addmessage">Send Message</Button> 
        <Button className="m-1" variant="info" href="/viewmessages"> View Messages</Button>
         <Button className="m-1" variant="info" href="/signout">Signout</Button> 
      </Container>
    )
  }

  return (
    <div className="App bg-secondary">
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
        <Route path="/resume" component={Resume}/>
        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;