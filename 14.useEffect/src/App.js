import { useEffect, useState } from 'react';

function App() {
  const [users, setUsers] = useState([]);

  const fetchData = async () => {
    const api = 'https://jsonplaceholder.typicode.com/users';
    const response = await fetch(api);
    const data = await response.json();
    console.log('Result = ', data);
    setUsers(data);
  };
  //call only once, when page is render
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <h1>Hello</h1>
      <ul>
        {users.map((obj, index) => (
          <li key={index}>{obj.name}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
