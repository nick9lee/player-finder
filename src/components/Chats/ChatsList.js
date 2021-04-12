import React from 'react';

import styles from './ChatsList.module.css';
import Chat from './Chat/Chat';

const chatsList = props => {
  return (
    <div className={styles.ChatsListContainer}>
      {
        props.chats.map(chat => {
          return <Chat />
        })
      }
    </div>
  );
};

export default chatsList;