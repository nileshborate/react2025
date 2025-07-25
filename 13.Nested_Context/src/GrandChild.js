import React from 'react';
import DeepChild from './DeepChild';

const GrandChild = () => {
  return (
    <div>
      <h1>Grand Child</h1>
      <DeepChild />
    </div>
  );
};

export default GrandChild;
