import React, {Fragment} from 'react';

import styles from './Filters.module.css';
import Backdrop from '../../components/UI/Backdrop/Backdrop';

const filters = props => {
  return (
    <Backdrop>
      <div className={styles.FiltersContainer}>
        <span className={styles.Close}>&#10005;</span>
        <h2 className={styles.CurFilters}>Current Filters</h2>
          <ul className={styles.CurFiltersList}></ul>
        <h2 className={styles.Filters}>Filters</h2>
      </div>
    </Backdrop>
  );
};

export default filters