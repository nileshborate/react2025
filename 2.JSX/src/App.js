function App() {
  let name = 'Nilesh';
  const date = new Date().toLocaleDateString();
  const time = new Date().toLocaleTimeString();
  const hour = new Date().getHours();
  let greeting = '';

  if (hour >= 1 && hour < 12) {
    greeting = 'Good morning';
  } else if (hour >= 12 && hour < 19) {
    greeting = 'Good Afternoon';
  } else {
    greeting = 'Good Night';
  }

  const heading = {
    color: 'red',
    textAlign: 'center',
    textTransform: 'capitalize',
    fontWeight: 'bold',
  };
  return (
    <>
      <h1>Welcome</h1>
      <h2 style={heading}>My name is {name}</h2>
      <h3>Date : {date}</h3>
      <h3>Time : {time}</h3>
      <h6>{greeting}!!!</h6>
    </>
  );
}

export default App;
