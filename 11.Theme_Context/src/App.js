import Content from './Content';
import Header from './Header';
import { ThemeProvider } from './ThemeContext';

function App() {
  return (
    <>
      <ThemeProvider>
        <Header />
        <Content />
      </ThemeProvider>
    </>
  );
}

export default App;
