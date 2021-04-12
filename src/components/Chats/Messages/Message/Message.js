import React from 'react';

import styles from './Message.module.css';

const message = props => {
  return (
    <div className={[styles.MessageContainer, props.self ? styles.Self : styles.NotSelf].join(' ')}>
      <span className={styles.Message}>{props.children}</span>
    </div>
  );
};

export default message;