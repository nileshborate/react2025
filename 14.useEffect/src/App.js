import { useEffect, useState } from 'react';

function App() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  const btnEvent1 = () => {
    setNum1(num1 + 1);
  };

  const btnEvent2 = () => {
    setNum2(num2 + 1);
  };

  //render first time when page is load.
  useEffect(() => {
    console.log('useEffect');
  }, []);
  return (
    <>
      <button onClick={btnEvent1}>Click Me {num1}</button>
      <button onClick={btnEvent2}>Click Me {num2}</button>
    </>
  );
}

export default App;
