import './App.css';
function App() {
  let name = 'Nilesh';
  return (
    <>
      <div className="main-div">
        <div className="center-div">
          <br />
          <h1>ToDo List</h1>
          <br />
          <input type="text" placeholder="Add a Item" />
          <button>+</button>
          <ol>
            <li>6:00am wakeup</li>
            <li>6:30am Do Exercise</li>
            <li>8:00am Breakfast</li>
          </ol>
        </div>
      </div>
    </>
  );
}

export default App;
