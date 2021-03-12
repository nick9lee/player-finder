import React from 'react';

import styles from './PillBadge.module.css';

const pillBadge = props => {
  return (
    <div className={[styles.PillBadge, styles[props.type]].join(' ')}>
      {props.children}
    </div>
  );
};

export default pillBadge;