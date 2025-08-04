import React, { useState, useCallback } from 'react';
import Child from './Child';

const Parent = () => {
  const [count, setCount] = useState(0);
  const [otherState, setOtherState] = useState(false);

  const toggle = () => {
    setOtherState((prev) => !prev);
    console.log('Toggle : ', otherState);
  };
  const handleClick = useCallback(() => {
    console.log('Button click');
  }, []); //memoized

  console.log('Parent Rendered');
  return (
    <>
      <div>Parent : {count}</div>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
      <button onClick={toggle}>Toggle</button>
      <Child childBtn={handleClick} />
    </>
  );
};

export default Parent;
