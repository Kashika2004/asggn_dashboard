import React from 'react';
import styles from './SummaryCards.module.css';

const SummaryCards = ({ total, completed }) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.card}>
        <h2>Total Assessments</h2>
        <p>{total}</p>
      </div>
      <div className={styles.card}>
        <h2>Completed Assessments</h2>
        <p>{completed}</p>
      </div>
    </div>
  );
};

export default SummaryCards;
