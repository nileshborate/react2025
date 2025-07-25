import React, { useContext } from 'react';
import UserContext from './UserContext';

const Home = () => {
  const { user, login } = useContext(UserContext);
  return (
    <div style={{ padding: '20px' }}>
      {user ? (
        <h2>You are logged in as {user.name} </h2>
      ) : (
        <button onClick={() => login('Nilesh')}>Login as Nilesh</button>
      )}
    </div>
  );
};

export default Home;
