import { useState } from 'react';
import './App.css';
function App() {
  const [register, setRegister] = useState({
    fname: '',
    lname: '',
    email: '',
    mobile: '',
  });

  const [finalName, setFinalName] = useState('');
  const [other, setOther] = useState('');

  const InputEvent = (event) => {
    const { name, value } = event.target;

    setRegister((preValue) => {
      //console.log('Prev value = ', preValue);
      return {
        ...preValue,
        [name]: value,
      };
    });
  };

  const showResult = (event) => {
    event.preventDefault();
    setFinalName(register.fname + ' ' + register.lname);
    setOther(register.email + ' ' + register.mobile);
    //console.log('full name = ', register);
  };

  const clearText = () => {
    setRegister({
      fname: '',
      lname: '',
      email: '',
      mobile: '',
    });
    setFinalName('');
    setOther('');
  };
  return (
    <>
      <form onSubmit={showResult}>
        <div>
          <h1>Welcome {finalName}</h1>
          <h5>{other}</h5>
          <input
            type="text"
            placeholder="Enter First Name"
            onChange={InputEvent}
            name="fname"
            value={register.fname}
          />

          <input
            type="text"
            placeholder="Enter Last Name"
            onChange={InputEvent}
            name="lname"
            value={register.lname}
          />

          <input
            type="email"
            placeholder="Enter Email Id"
            onChange={InputEvent}
            name="email"
            value={register.email}
          />

          <input
            type="number"
            placeholder="Enter Mobile Number"
            onChange={InputEvent}
            name="mobile"
            value={register.mobile}
          />

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
