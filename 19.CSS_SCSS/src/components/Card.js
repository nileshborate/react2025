import React from 'react';
import styles from './Card.module.scss';
const Card = () => {
  return (
    <>
      <div className={styles.card}>
        <h3 className={styles.title}>SCSS Module Example</h3>
      </div>
    </>
  );
};

export default Card;
