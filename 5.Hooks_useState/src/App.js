import { useState } from 'react';
import './App.css';
function App() {
  let [counter, setCounter] = useState(20);

  const buttonEvent = () => {
    counter = counter + 1;
    setCounter(counter); //assign new value to counter
    console.log('Button click : ', counter);
  };

  return (
    <>
      <h1>{counter}</h1>
      <button onClick={buttonEvent}>Click Me</button>
    </>
  );
}

export default App;
