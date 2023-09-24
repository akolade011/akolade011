import { useAuth0 } from '@auth0/auth0-react';
import * as React from 'react';
import Iframe from './Iframe';

const LogoutButton = () => {
    const { logout, isAuthenticated } = useAuth0();
 
    return ((
      
        
                  isAuthenticated && (<div >
              
               <button className='logOutButton' onClick={() => {logout()}}> 
                    SignOut
            </button>
                <Iframe></Iframe>
            </div>
          
                  )
            
        )
    )
}

export default LogoutButton