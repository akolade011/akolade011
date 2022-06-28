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
  let imgs = [
    'https://images.unsplash.com/photo-1527613426441-4da17471b66d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1452&q=80',
    'https://images.unsplash.com/photo-1507413245164-6160d8298b31?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    'https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'
  ];
    return (
       
      <div className='header'>
        



<Carousel variant="dark">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={imgs[0]}
 
    />

  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={imgs[1]}

    />

  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={imgs[2]}

    />

  </Carousel.Item>
</Carousel>
                </div>

            
        )
    
}

export default Header