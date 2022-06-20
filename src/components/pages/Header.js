import * as React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "~video-react/styles/scss/video-react"; // or import scss

function Header ()  {
 const play = true;
    return (
       
      <div className='header'>
        

<nav>
<header className='v-header containerH'>
  <div className='fullscreen-video-wrap'>
  <video src="video/3.mov" muted loop="true" autoPlay={play}></video>
  </div>

</header>
</nav>
                </div>

            
        )
    
}

export default Header