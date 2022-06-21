import { useAuth0 } from '@auth0/auth0-react';
import * as React from 'react';
const Profile = () => {
    const {  isAuthenticated } = useAuth0();

    return (
        isAuthenticated && (
            <article className='column'>
               
          
                <ul>
                    {/* {Object.keys(user).map((objKey, i) => <li key={i}>{objKey}: {user[objKey]}{console.log(user.nickname="james")}
                    <button>update</button> </li>)} */}
                </ul>
            </article>
        )
    )
}

export default Profile