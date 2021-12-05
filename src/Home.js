// src/Home.js
import { useOktaAuth } from '@okta/okta-react';
import { Link } from 'react-router-dom';



const Home = () => {
  const { oktaAuth, authState } = useOktaAuth();

  const login = async () => oktaAuth.signInWithRedirect();

  if(!authState) {
    return <div>Loading...</div>;
  }

  if(!authState.isAuthenticated) {
    return (
      <div>
        <p>Not Logged in yet</p>
        <button onClick={login}>Login</button>
      </div>
    );
  }

  return (
    <div>
    <Link to='/'>Home</Link><br/>
    <Link to='/posts'>Posts</Link><br/>
  </div>
  );
};

export default Home;