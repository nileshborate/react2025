import React, { useState, useMemo } from 'react';

const WithMemo = () => {
  const [number, setNumber] = useState(10);
  const [dark, setDark] = useState(false);

  const factorial = (n) => {
    console.time('factorial-with-memo');
    let result = 1;
    for (let i = 1; i <= n; i++) {
      for (let j = 0; j < 1e7; j++) {} // simulate delay
      result *= i;
    }
    console.timeEnd('factorial-with-memo');
    return result;
  };

  const factorialResult = useMemo(() => factorial(number), [number]);

  const themeStyles = {
    backgroundColor: dark ? '#333' : '#fff',
    color: dark ? '#fff' : '#000',
    padding: '20px',
    marginTop: '10px',
  };
  return (
    <>
      <h3>Without useMemo</h3>
      <input type="number" onChange={(e) => setNumber(e.target.value)} />
      <br />
      <br />
      <button onClick={() => setDark((prev) => !prev)}>Toggle Theme</button>
      <div style={themeStyles}>
        <h4>Number : {number}</h4>
        <h4>Factorial Result : {factorialResult}</h4>
      </div>
    </>
  );
};

export default WithMemo;
