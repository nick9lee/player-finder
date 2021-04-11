import React from 'react';

import styles from './NavItems.module.css';
import NavItem from './NavItem/NavItem';

const navItems = props => {
  return (
    <div className={[styles.NavItems, props.show ? styles.Show : ''].join(' ')}>
      <div className={[styles.ItemsContainer, props.show ? styles.Show : ''].join(' ')}>
        {
          props.items.map((item, index) => {
            return <NavItem key={index} clicked={item.clicked} to={item.to}>{item.name}</NavItem>
          })
        }
      </div>
    </div>
  );
};

export default navItems;