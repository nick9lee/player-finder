import React from 'react';

import styles from './InputBox.module.css';

const inputBox = props => {
  return (
    <div className={styles.HOC}>
      <div className={styles.Container}>
        <input
          type='text'
          placeholder='Your Message'
          className={styles.Input}
        />
        <button className={styles.SendBtn}>&#62;</button>
      </div>
    </div>
  );
};

export default inputBox;