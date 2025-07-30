import React, { useState, useRef } from 'react';

const Example2 = () => {
  const [count, setCount] = useState(0);
  const intervalRef = useRef(null);

  const startTimer = () => {
    intervalRef.current = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(intervalRef.current);
  };
  return (
    <>
      <h2>{count} Seconds</h2>
      <button onClick={startTimer}>Start</button>
      <br />
      <br />
      <button onClick={stopTimer}>Stop</button>
    </>
  );
};

export default Example2;
