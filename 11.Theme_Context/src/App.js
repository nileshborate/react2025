import Content from './Content';
import Footer from './Footer';
import Header from './Header';
import { ThemeProvider } from './ThemeContext';

function App() {
  return (
    <>
      <ThemeProvider>
        <Header />
        <Content />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
