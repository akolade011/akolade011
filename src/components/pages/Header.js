import * as React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header ()  {
 
    return (
      
      <div className='header'>
<Navbar  expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Real World Health</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="https://realworld.health/">about</Nav.Link>
            <Nav.Link href="#action2">SignOut</Nav.Link>
           

          </Nav>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>

                </div>

            
        )
    
}

export default Header