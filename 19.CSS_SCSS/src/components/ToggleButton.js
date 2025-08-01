import React, { useState } from 'react';
import styles from './ToggleButton.module.css';

const ToggleButton = () => {
  const [active, setActive] = useState(false);

  const btnClick = () => {
    setActive((prev) => !prev);
  };
  return (
    <>
      <button
        className={active ? styles.activeBtn : styles.inactiveBtn}
        onClick={btnClick}
      >
        {active ? 'Active' : 'Inactive'}
      </button>
    </>
  );
};

export default ToggleButton;
