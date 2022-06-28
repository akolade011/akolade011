import * as React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import ReactButton from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card';
import Logo from '../../assets/images/bg.png'; 

import 'bootstrap/dist/css/bootstrap.css';


function Header ()  {
 const play = true;
    return (
       
      <div className='header'>
        

<nav>

</nav>

<Container>
  <Row>
    <Col>
    
    </Col>
  </Row>
</Container>
<Card className="bg-light text-white Header__Card" border="dark" style={{ width: '100%' }}>
      <Card.Img src={Logo} alt="Card image" />
      <Card.ImgOverlay>
        <div className='Header__Card'>
        <Card.Title>Real World Health2020</Card.Title>
        <Card.Text>
        We are at the heart of healthcare, data science and technology – providing advance data solutions to improve human health.
        </Card.Text>
        {/* <Card.Text>Last updated 3 mins ago</Card.Text> */}
        </div>
      </Card.ImgOverlay>
    </Card>
                </div>

            
        )
    
}

export default Header