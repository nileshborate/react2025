import React, { createContext, useState } from 'react';

//1. create the context
export const ThemeContext = createContext();

//2. Create a Provider Component
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prev) => {
      return prev === 'light' ? 'dark' : 'light';
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
