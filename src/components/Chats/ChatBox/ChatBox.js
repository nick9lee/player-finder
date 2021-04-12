import React from 'react';

import styles from './ChatBox.module.css';

const chatBox = props => {
  return (
    <div className={styles.ChatBoxContainer}>
      {props.children}
    </div>
  );
};

export default chatBox;