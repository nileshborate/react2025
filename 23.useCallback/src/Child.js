import React from 'react';

const Child = ({ childBtn }) => {
  console.log('Child : Render');
  return (
    <>
      <button onClick={childBtn}>Child : Click Me</button>
    </>
  );
};

export default React.memo(Child);
