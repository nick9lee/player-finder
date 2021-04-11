import React from 'react';

import styles from './Filter.module.css';
import PillBadge from '../UI/PillBadge/PillBadge';

const filter = props => {
  return (
    <PillBadge type="PrimaryBorder">
      <span className={styles.Filter}>{props.children}</span>
      {props.close ? <span className={styles.RemoveFilter}>&#9747;</span> : null}
    </PillBadge>
  );
};

export default filter;