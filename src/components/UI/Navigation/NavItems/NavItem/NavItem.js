import React from 'react';
import {Link} from 'react-router-dom';

import styles from './NavItem.module.css';

const navItem = props => {
  return (
    <div onClick={props.clicked} className={styles.ItemContainer}><Link to={props.to} className={styles.Item}>{props.children}</Link></div>
  );
};

export default navItem;