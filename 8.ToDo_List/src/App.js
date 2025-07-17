import { useState } from 'react';
import './App.css';
import List from './List';
function App() {
  const [item, setItem] = useState('');
  const [list, setList] = useState([]);

  const itemEvent = (event) => {
    setItem(event.target.value);
  };

  const addItem = () => {
    setList((oldItems) => {
      return [...oldItems, item];
    });

    setItem('');
  };

  const deleteItem = (id) => {
    console.log('delete Item : ', id);
    setList((oldItems) => {
      return oldItems.filter((val, index) => {
        return index !== id;
      });
    });
  };
  return (
    <>
      <div className="main-div">
        <div className="center-div">
          <br />
          <h1>ToDo List</h1>
          <br />
          <input
            type="text"
            placeholder="Add a Item"
            onChange={itemEvent}
            value={item}
          />
          <button onClick={addItem}>+</button>
          <ol>
            {list.map((val, index) => {
              return (
                <List key={index} text={val} delete={deleteItem} id={index} />
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
}

export default App;
