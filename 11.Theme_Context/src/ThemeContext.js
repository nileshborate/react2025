import React, { createContext } from 'react';

//1. create the context
export const ThemeContext = createContext();

//2. Create a Provider Component
export const ThemeProvider = ({ children }) => {
  return (
    <ThemeContext.Provider value={'Light Theme'}>
      {children}
    </ThemeContext.Provider>
  );
};
