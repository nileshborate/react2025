import Home from './Home';
import Navbar from './Navbar';
import { UserProvider } from './UserContext';

function App() {
  return (
    <>
      <UserProvider>
        <Navbar />
        <Home />
      </UserProvider>
    </>
  );
}

export default App;
