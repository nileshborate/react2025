import { useState } from 'react';
import './App.css';
function App() {
  /*
useState is an array.
It takes 2 parameters
	First parameter : current data
	Second parameter : updated data
  useState function parameter is default initial value.
	i.e. default initial value indirectly assign to the first parameter

  Each time you call setCounter, React re-renders the component with the new counter.


  Things to Remember (For all hooks):
    useState is only usable inside a React function component or a custom Hook.
    Don't call it inside loops, conditions, or nested functions.
    Updates are asynchronous – they don't happen instantly.
*/

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
