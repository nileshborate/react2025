import { useState } from 'react';
import './App.css';
function App() {
  const [fullName, setFullName] = useState({
    fname: '',
    lname: '',
  });

  const [finalName, setFinalName] = useState('');

  const InputEvent = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    if (name === 'fname') {
      setFullName({
        ...fullName,
        fname: value,
      });
    }

    if (name === 'lname') {
      setFullName({
        ...fullName,
        lname: value,
      });
    }
    //console.log('full name = ', fullName);
  };

  const showResult = (event) => {
    event.preventDefault();
    setFinalName(fullName.fname + ' ' + fullName.lname);
    console.log('full name = ', fullName);
  };

  const clearText = () => {
    setFullName({
      fname: '',
      lname: '',
    });
    setFinalName('');
  };
  return (
    <>
      <form onSubmit={showResult}>
        <div>
          <h1>Welcome {finalName}</h1>
          <input
            type="text"
            placeholder="Enter First Name"
            onChange={InputEvent}
            name="fname"
            value={fullName.fname}
          />
          <br />
          <input
            type="text"
            placeholder="Enter Last Name"
            onChange={InputEvent}
            name="lname"
            value={fullName.lname}
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
