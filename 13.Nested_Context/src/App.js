import Parent from './Parent';
import { UserProvider } from './UserContext';

function App() {
  return (
    <UserProvider>
      <Parent />
    </UserProvider>
  );
}

export default App;
