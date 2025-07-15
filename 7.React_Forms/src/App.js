import { useState } from 'react';
import './App.css';
function App() {
  const [fname, setFName] = useState('');
  const [lname, setLName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const InputEvent1 = (event) => {
    setFName(event.target.value);
  };
  const InputEvent2 = (event) => {
    setLName(event.target.value);
  };

  const showResult = (event) => {
    event.preventDefault();
    setFirstName(fname);
    setLastName(lname);
  };

  const clearText = () => {
    setFName('');
    setLName('');
    setFirstName('');
    setLastName('');
  };
  return (
    <>
      <form onSubmit={showResult}>
        <div>
          <h1>
            Welcome {firstName} {lastName}
          </h1>
          <input
            type="text"
            placeholder="Enter First Name"
            onChange={InputEvent1}
            name="firstName"
          />
          <br />
          <input
            type="text"
            placeholder="Enter Last Name"
            onChange={InputEvent2}
            name="lastName"
          />
          <br />
          <br />
          <button type="submit" /*onClick={showResult}*/>Click Me</button>
          <button type="reset" onClick={clearText}>
            Clear Text
          </button>
        </div>
      </form>
    </>
  );
}

export default App;
