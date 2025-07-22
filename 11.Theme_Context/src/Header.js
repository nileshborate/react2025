import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <>
      <header
        style={{
          background: theme === 'light' ? '#eee' : '#333',
          padding: '1rem',
          color: theme === 'light' ? '#000' : '#fff',
        }}
      >
        <div>Header : {theme}</div>
        <button onClick={toggleTheme}>Toggle Theme</button>
      </header>
    </>
  );
};

export default Header;
