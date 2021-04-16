import React from 'react';
import {Link} from 'react-router-dom';

import styles from './ChatsList.module.css';
import Chat from './Chat/Chat';

const chatsList = props => {
  return (
    <div className={styles.ChatsListContainer}>
      {
        props.chats.map(chat => {
          return <Link to='/chats/1'><Chat /></Link>
        })
      }
    </div>
  );
};

export default chatsList;