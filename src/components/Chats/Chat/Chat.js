import React from 'react';

import styles from './Chat.module.css';
import ProfilePic from '../../Profiles/ProfilePic/ProfilePic';

const chat = props => {
  return (
    <div className={styles.ChatContainer}>
      <ProfilePic />
      <span className={styles.Name}>John Smith</span>
    </div>
  );
};

export default chat;