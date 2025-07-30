import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const person = {
    id: 10,
    name: 'Nilesh',
  };
  const buttonClick = () => {
    navigate('/user-details', { state: { person } });
  };
  return (
    <div>
      <nav
        style={{
          display: 'flex',
          gap: '15px',
          padding: '10px',
          background: '#eee',
        }}
      >
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <h1>Hello</h1>
      <button onClick={buttonClick}>Go to User Detail</button>
    </div>
  );
};

export default Home;
