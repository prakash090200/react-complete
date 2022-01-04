import React from 'react'
import  "./Part13a.css"
import { Button,Alert } from 'react-bootstrap';

export default function Part14() {
    return (
        <div>
            <p className="success">Bootstrap</p>
            <Button onClick={()=>alert("yess  :)")}>Submit</Button>
            <Button variant="primary">Primary</Button>{' '}
  <Button variant="secondary">Secondary</Button>{' '}
  <Button variant="success">Success</Button>{' '}
  <Button variant="warning">Warning</Button>{' '}
  <Button variant="danger">Danger</Button> <Button variant="info">Info</Button>{' '}
  <Button variant="light">Light</Button> <Button variant="dark">Dark</Button>{' '}
  <Button variant="link">Link</Button>
  {
    
  
  <Alert variant="warning">
    This is a warning alert—check it out!
  </Alert>

  }
        </div>
    )
}
