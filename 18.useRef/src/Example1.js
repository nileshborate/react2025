import React, { useRef } from 'react';

const Example1 = () => {
  const inputRef = useRef(null);

  const focusInput = () => {
    console.log('Button click');
    inputRef.current.focus();
  };
  return (
    <>
      <input ref={inputRef} type="text" placeholder="Type here" />
      <input type="text" placeholder="Type here" />
      <input type="text" placeholder="Type here" />
      <button onClick={focusInput}>Focus Input</button>
    </>
  );
};

export default Example1;
