import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const UserDetails = () => {
  const [person, setPerson] = useState({});
  const navigate = useNavigate(); //routing one page to another page
  const location = useLocation(); //on the receiving page, you can read data using this hook
  const btnClick = () => {
    navigate('/');
  };
  useEffect(() => {
    console.log('Use Effect call ', location.state);
    setPerson(location.state.person);
  }, []);
  return (
    <>
      <h1>UserDetails</h1>
      <h3>Id : {person.id}</h3>
      <h3>Name : {person.name}</h3>
      <button onClick={btnClick}>Go to Home</button>
    </>
  );
};

export default UserDetails;
