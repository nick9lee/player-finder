import React from 'react';

import styles from './NavIcon.module.css';

const navIcon = props => {
  return (
    <div className={[styles.NavIcon].join(' ')}></div>
  );
};

export default navIcon;