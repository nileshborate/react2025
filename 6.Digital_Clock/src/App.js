import { useState } from 'react';

function App() {
  let [dateTime, setDateTime] = useState(new Date().toLocaleTimeString());

  const updateTime = () => {
    console.log('Button click');
    let newDateTime = new Date().toLocaleTimeString();
    setDateTime(newDateTime);
    setInterval(updateTime, 1000);
  };
  return (
    <>
      <h1>{dateTime}</h1>
      <button onClick={updateTime}>Live Clock</button>
    </>
  );
}

/*
1. When you click on Start button then show current date and time
    10:35:10 PM
2. Make it live.

*/
export default App;
