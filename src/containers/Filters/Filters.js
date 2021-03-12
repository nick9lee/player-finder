import React, {Fragment} from 'react';

import styles from './Filters.module.css';
import Backdrop from '../../components/UI/Backdrop/Backdrop';
import Filter from '../../components/Filter/Filter';

const filters = props => {
  return (
    <Backdrop>
      <div className={styles.FiltersContainer}>
        <span className={styles.Close}>&#10005;</span>
        <h2 className={styles.CurFilters}>Current Filters</h2>
          <ul className={styles.CurFiltersList}>
            <li className={styles.CurFiltersItem}><Filter close>Badminton</Filter></li>
            <li className={styles.CurFiltersItem}><Filter close>Calgary</Filter></li>
          </ul>
        <h2 className={styles.Filters}>Filters</h2>
        <div className={styles.FiltersListContainer}>
          <h3 className={styles.FilterCategory}>Sports</h3>
          <ul className={styles.FiltersList}>
            <li className={styles.FiltersItem}><Filter>Badminton</Filter></li>
            <li className={styles.FiltersItem}><Filter>Badminton</Filter></li>
            <li className={styles.FiltersItem}><Filter>Badminton</Filter></li>
            <li className={styles.FiltersItem}><Filter>Badminton</Filter></li>
            <li className={styles.FiltersItem}><Filter>Badminton</Filter></li>
            <li className={styles.FiltersItem}><Filter>Badminton</Filter></li>
          </ul>
          <h3 className={styles.FilterCategory}>Location</h3>
          <ul className={styles.FiltersList}>
            <li className={styles.FiltersItem}><Filter>Calgary</Filter></li>
            <li className={styles.FiltersItem}><Filter>Calgary</Filter></li>
            <li className={styles.FiltersItem}><Filter>Calgary</Filter></li>
            <li className={styles.FiltersItem}><Filter>Calgary</Filter></li>
            <li className={styles.FiltersItem}><Filter>Calgary</Filter></li>
            <li className={styles.FiltersItem}><Filter>Calgary</Filter></li>
          </ul>
          <h3 className={styles.FilterCategory}>Time</h3>
          <ul className={styles.FiltersList}>
            <li className={styles.FiltersItem}><Filter>Most Recent</Filter></li>
            <li className={styles.FiltersItem}><Filter>Most Recent</Filter></li>
            <li className={styles.FiltersItem}><Filter>Most Recent</Filter></li>
            <li className={styles.FiltersItem}><Filter>Most Recent</Filter></li>
            <li className={styles.FiltersItem}><Filter>Most Recent</Filter></li>
            <li className={styles.FiltersItem}><Filter>Most Recent</Filter></li>
          </ul>
          <h3 className={styles.FilterCategory}>Response</h3>
          <ul className={styles.FiltersList}>
            <li className={styles.FiltersItem}><Filter>Most Response</Filter></li>
            <li className={styles.FiltersItem}><Filter>Most Response</Filter></li>
            <li className={styles.FiltersItem}><Filter>Most Response</Filter></li>
            <li className={styles.FiltersItem}><Filter>Most Response</Filter></li>
            <li className={styles.FiltersItem}><Filter>Most Response</Filter></li>
            <li className={styles.FiltersItem}><Filter>Most Response</Filter></li>
          </ul>
          <h3 className={styles.FilterCategory}>Sports</h3>
          <ul className={styles.FiltersList}>
            <li className={styles.FiltersItem}><Filter>Badminton</Filter></li>
            <li className={styles.FiltersItem}><Filter>Badminton</Filter></li>
            <li className={styles.FiltersItem}><Filter>Badminton</Filter></li>
            <li className={styles.FiltersItem}><Filter>Badminton</Filter></li>
            <li className={styles.FiltersItem}><Filter>Badminton</Filter></li>
            <li className={styles.FiltersItem}><Filter>Badminton</Filter></li>
          </ul>
        </div>
      </div>
    </Backdrop>
  );
};

export default filters