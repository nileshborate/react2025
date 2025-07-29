import About from './About';
import Contact from './Contact';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import ErrorPage from './ErrorPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
