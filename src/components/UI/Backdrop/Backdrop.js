import React from 'react';

import styles from './Backdrop.module.css';

const backdrop = props => {
  return (
    <div className={styles.Backdrop}>
      {props.children}
    </div>
  );
};

export default backdrop;