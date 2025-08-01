import React from 'react';
import styles from './Badge.module.css';

const Badge = (props) => {
  return (
    <div>
      <span className={styles[props.type]}>{props.text}</span>
    </div>
  );
};

export default Badge;
