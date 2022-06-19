import { useAuth0, User } from '@auth0/auth0-react';
import * as React from 'react';
import Iframe from './Iframe';

const LogoutButton = () => {
    const { logout, isAuthenticated } = useAuth0();
    const { user } = useAuth0();
 
    return (
      
        
                  isAuthenticated && (<button onClick={() => {logout()}}>
               <div> <h1>welcome {user.name}</h1>

                Sign Out</div>
                <Iframe></Iframe>
            </button>
          

            
        )
    )
}

export default LogoutButton