import { createContext } from 'react';
import CompA from './CompA';

const FirstName = createContext();
function App() {
  return (
    <>
      <div>App Component</div>
      <FirstName.Provider value={'Rahul'}>
        <CompA />
      </FirstName.Provider>
    </>
  );
}

export default App;
export { FirstName };
