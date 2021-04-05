import React from 'react';

import styles from './NavItems.module.css';
import NavItem from './NavItem/NavItem';

const navItems = props => {
  return (
    <div className={styles.ItemsContainer}>
      <NavItem>NavItem</NavItem>
      <NavItem>NavItem</NavItem>
      <NavItem>NavItem</NavItem>
      <NavItem>NavItem</NavItem>
      <NavItem>NavItem</NavItem>
    </div>
  );
};

export default navItems;