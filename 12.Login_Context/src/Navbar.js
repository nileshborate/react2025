import React, { useContext } from 'react';
import UserContext from './UserContext';

const Navbar = () => {
  const { user, logout } = useContext(UserContext);
  return (
    <nav style={{ background: '#ddd', padding: '10px' }}>
      {user ? (
        <>
          <span>Welcome {user?.name}</span>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <span>Login</span>
      )}
    </nav>
  );
};

export default Navbar;
