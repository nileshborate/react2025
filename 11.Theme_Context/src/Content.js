import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

const Content = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div
      style={{
        background: theme === 'light' ? '#fff' : '#000',
        padding: '1rem',
        color: theme === 'light' ? '#000' : '#fff',
      }}
    >
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque nisi
        dolor eaque possimus mollitia unde nostrum animi sunt aliquid. Incidunt
        exercitationem consectetur dolore autem eos rerum maxime tempora, quae
        odio.
      </p>
    </div>
  );
};

export default Content;
