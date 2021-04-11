import React, {Fragment} from 'react';

import styles from './Pagination.module.css';

const getPaginationArr = size => {
  let result = [];
  for (let i = 0; i < size; i++) {
    result.push(i + 1);
  }
  return result;
}

const pagination = props => {
  return (
    <Fragment>
      <p className={styles.Pagination}>
        <span className={styles.Prev}>&lt;</span>
        {
          getPaginationArr(props.size).map(val => {
            return <span key={val} className={[styles.PageNum, props.active === val ? styles.Active : null].join(' ')}>{val}</span>
          })
        }
        <span className={styles.Next}>&gt;</span>
      </p>
    </Fragment>
  );
};

export default pagination;