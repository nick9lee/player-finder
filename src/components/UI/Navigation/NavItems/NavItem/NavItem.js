import React from 'react';

import styles from './NavItem.module.css';

const navItem = props => {
  return (
    <div className={styles.Item}>{props.children}</div>
  );
};

export default navItem;