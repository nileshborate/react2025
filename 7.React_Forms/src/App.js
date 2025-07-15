import { useState } from 'react';
import './App.css';
function App() {
  const [name, setName] = useState('');
  const [firstName, setFirstName] = useState('');

  const InputEvent = (event) => {
    console.log('Event call :', event.target.name, event.target.value);
    setName(event.target.value);
  };

  const showResult = (event) => {
    event.preventDefault();
    setFirstName(name);
  };
  return (
    <>
      <form onSubmit={showResult}>
        <div>
          <h1>Welcome {firstName}</h1>
          <input
            type="text"
            placeholder="Enter Your Name"
            onChange={InputEvent}
            name="firstName"
          />
          <br />
          <br />
          <button type="submit" /*onClick={showResult}*/>Click Me</button>
          <button type="reset">Clear Text</button>
        </div>
      </form>
    </>
  );
}

export default App;
