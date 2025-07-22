import React from 'react';
import { FirstName } from './App';

const CompC = () => {
  return (
    <>
      <FirstName.Consumer>
        {(fname) => {
          return <div>CompC : {fname}</div>;
        }}
      </FirstName.Consumer>
    </>
  );
};

export default CompC;
