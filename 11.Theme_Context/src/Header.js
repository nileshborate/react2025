import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

const Header = () => {
  const value = useContext(ThemeContext);
  return <div>Header : {value}</div>;
};

export default Header;
