import { useAuth0 } from '@auth0/auth0-react';
import * as React from 'react';
const Profile = () => {
    const { user, isAuthenticated } = useAuth0();

    return (
        isAuthenticated && (
            <article className='column'>
               
                <h2>{user.name}</h2>{}
                <ul>
                    {Object.keys(user).map((objKey, i) => <li key={i}>{objKey}: {user[objKey]}{console.log(user.nickname="james")}
                    <button>update</button> </li>)}
                </ul>
            </article>
        )
    )
}

export default Profile