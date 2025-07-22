import { createContext } from 'react';
import CompA from './CompA';

const FirstName = createContext();
const LastName = createContext();
function App() {
  return (
    <>
      <div>App Component</div>
      <FirstName.Provider value={'Rahul'}>
        <LastName.Provider value={'Sharma'}>
          <CompA />
        </LastName.Provider>
      </FirstName.Provider>
    </>
  );
}

export default App;
export { FirstName, LastName };
