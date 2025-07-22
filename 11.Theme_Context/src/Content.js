import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

const Content = () => {
  const value = useContext(ThemeContext);
  return <div>Content : {value}</div>;
};

export default Content;
