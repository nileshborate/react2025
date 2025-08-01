import React from 'react';
import styles from './Card.module.scss';

const Card = (props) => {
  //Dynamic class : card + type (primary, success, danger)
  const cardClass = `${styles.card} ${styles[props.type]}`;
  return (
    <div className={cardClass}>
      <h3 className={styles.title}>{props.title}</h3>
      <p className={styles.description}>{props.description}</p>
    </div>
  );
};

export default Card;
