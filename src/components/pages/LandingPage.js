import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../../assets/images/bg.png'
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import LogoutButton from './LogoutButton';

export default function LandingPage() {
    return (
       <div className='LandingPage'>
           <div className='Container'>
           <Container fluid>
  <Row>
    <Col>
    <h1 className="main-title text-center">login / register page</h1>
            <p className="main-para text-center">join us now and don't waste time</p>
    
    </Col>
  </Row>
</Container>
                       <h1 className="main-title text-center">login / register page</h1>
            <p className="main-para text-center">join us now and don't waste time</p></div>
           {/* <img src={logo}></img> */}
         <LogoutButton></LogoutButton>
           </div>
 
    )
}

