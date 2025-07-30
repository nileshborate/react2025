import React from 'react';
import { useNavigate } from 'react-router-dom';

const UserDetails = () => {
  const navigate = useNavigate();
  const btnClick = () => {
    navigate('/');
  };
  return (
    <>
      <div>UserDetails</div>
      <button onClick={btnClick}>Go to Home</button>
    </>
  );
};

export default UserDetails;
