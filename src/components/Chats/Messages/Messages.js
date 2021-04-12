import React from 'react';

import styles from './Messages.module.css';
import Message from './Message/Message';

const messages = props => {
  return (
    <div className={styles.MessagesContainer}>
      {
        props.messages.map((msg, index) => {
          return <Message self={msg.self} key={index}>{msg.body}</Message>
        })
      }
    </div>
  );
};

export default messages