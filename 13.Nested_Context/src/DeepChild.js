import React, { useContext } from 'react';
import UserContext from './UserContext';

const DeepChild = () => {
  const user = useContext(UserContext);
  return (
    <div>
      <h1>Deep Child : {user.name}</h1>
    </div>
  );
};

export default DeepChild;
