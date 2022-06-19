
import LoginButton from "./components/pages/LoginButton";
import LogoutButton from "./components/pages/LogoutButton"
import Profile from "./components/pages/Profile"
import { useAuth0 } from "@auth0/auth0-react";
import * as React from 'react';
import Styles from "./scss/styles.scss"
function App() {
  const { isLoading, error } = useAuth0();

  return (
    <main className="column">
      <h1>Welcome to Realworld-health</h1>
      {error && <p>Authentication Error</p>}
      {!error && isLoading && <p>Loading...</p>}
      {!error && !isLoading && (
        <>
          <LoginButton />
          <LogoutButton />
          <Profile></Profile>

        </>
      )}
    </main>
  );
}

export default App;