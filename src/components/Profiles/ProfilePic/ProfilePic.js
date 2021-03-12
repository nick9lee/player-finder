import React from 'react';

import styles from './ProfilePic.module.css';

const profilePic = props => {
  return <div className={[styles.ProfilePic, styles[props.size]].join(' ')}></div>
};

export default profilePic;