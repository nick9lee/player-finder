import React from 'react';

import styles from './NavIcon.module.css';

const navIcon = props => {
  const getClasses = () => {
    const classes = [styles.NavIcon];
    if (props.active) classes.push(styles.Active);
    return classes;
  };

  return (
    <div className={getClasses().join(' ')} onClick={props.clicked}></div>
  );
};

export default navIcon;