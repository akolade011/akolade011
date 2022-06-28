import * as React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import ReactButton from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
import Carousel from 'react-bootstrap/Carousel'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card';
import img1 from '../../assets/images/img1.png'; 
import img2 from '../../assets/images/img2.png'; 
import img3 from '../../assets/images/img3.png'; 

import 'bootstrap/dist/css/bootstrap.css';


function Header ()  {

    return (
       
      <div className='header'>
        



<Carousel variant="dark">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img1}
 
    />

  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img2}

    />

  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img3}

    />

  </Carousel.Item>
</Carousel>
<img className='test' src={img1}></img>
<Container className='mainContainer'><h1>hello world</h1>
<h2>test</h2></Container>
<Row>
  <Col></Col>
</Row>
                </div>

            
        )
    
}

export default Header