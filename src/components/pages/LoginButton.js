
import { useAuth0 } from '@auth0/auth0-react';
import React, { useRef, useState ,useEffect} from "react";
import { gsap } from "gsap";
const LoginButton = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();
    const boxRef = useRef();
    const boxRef1 = useRef();
    useEffect(() => {
        gsap.to(boxRef.current, { rotation: "+=360" });
        gsap.to(boxRef1.current, { x: 100,      repeat: 1,
     
            scrub: false,
            yoyo: true  });
      });
    
    return (

        !isAuthenticated && (
            <div>
                <h1 className='box' ref={boxRef}>For a new generation of innovators</h1>
            <button className='box1' ref={boxRef1}onClick={() => loginWithRedirect()}>
                Sign In here
            </button>
      
            </div>
     
        )
        
    )
    
}

export default LoginButton