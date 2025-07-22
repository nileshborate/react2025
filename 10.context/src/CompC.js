import React from 'react';
import { FirstName, LastName } from './App';

const CompC = () => {
  return (
    <>
      <FirstName.Consumer>
        {(fname) => {
          return (
            <LastName.Consumer>
              {(lname) => {
                return (
                  <div>
                    CompC : {fname} {lname}
                  </div>
                );
              }}
            </LastName.Consumer>
          );
        }}
      </FirstName.Consumer>
    </>
  );
};

export default CompC;
