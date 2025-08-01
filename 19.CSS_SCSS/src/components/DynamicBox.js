import React, { useState } from 'react';

const DynamicBox = () => {
  const [color, setColor] = useState('red');
  return (
    <div
      style={{
        width: '200px',
        height: '100px',
        background: color,
        marginBottom: '10px',
      }}
    >
      <button onClick={() => setColor('blue')}>Change to Blue</button>
      <button onClick={() => setColor('green')}>Change to Green</button>
    </div>
  );
};

export default DynamicBox;
