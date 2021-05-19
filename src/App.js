import React from 'react';
import './App.css';
import * as ReactBootstrap from 'react-bootstrap'
function App() {
  return (
    <div className="App">
      
      <ReactBootstrap.Form>
  <ReactBootstrap.Form.Group controlId="formBasicEmail">
    <ReactBootstrap.Form.Label>Email address</ReactBootstrap.Form.Label>
    <ReactBootstrap.Form.Control type="email" placeholder="Enter email" />
    <ReactBootstrap.Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </ReactBootstrap.Form.Text>
  </ReactBootstrap.Form.Group>

  <ReactBootstrap.Form.Group controlId="formBasicPassword">
    <ReactBootstrap.Form.Label>Password</ReactBootstrap.Form.Label>
    <ReactBootstrap.Form.Control type="password" placeholder="Password" />
  </ReactBootstrap.Form.Group>
  <ReactBootstrap.Form.Group controlId="formBasicCheckbox">
    <ReactBootstrap.Form.Check type="checkbox" label="Check me out" />
  </ReactBootstrap.Form.Group>
  <ReactBootstrap.Button variant="primary" type="submit">
    Submit
  </ReactBootstrap.Button>
</ReactBootstrap.Form>
    </div>
  );
}

export default App;
