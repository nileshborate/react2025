import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav
      style={{
        padding: '10px',
        background: '#eee',
        display: 'flex',
        gap: '10px',
      }}
    >
      <Link to="/">Home</Link>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/users">Users</Link>
    </nav>
  );
};

export default Header;
