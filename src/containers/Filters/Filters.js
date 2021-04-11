import React, {Component, Fragment} from 'react';

import styles from './Filters.module.css';
import Backdrop from '../../components/UI/Backdrop/Backdrop';
import Filter from '../../components/Filter/Filter';

class Filters extends Component {
  state = {
    filters: {
      Sports: [
        'Badminton', 
        'Soccer', 
        'Volleyball'
      ],
      Location: [
        'Calgary',
        'Edmonton',
        'Vancouver',
        'Toronto',
        'Quebec'
      ],
      Time: [
        'This Year',
        'This Month',
        'This Week',
        'Today'
      ]
    },
    curFilters: {
      Sports: [],
      Location: [],
      Time: []
    }
  };
  render() {
    return (
      <div>
        {
          this.props.show ? 
          <Backdrop>
          <div className={styles.FiltersContainer}>
            <span className={styles.Close} onClick={this.props.closeHandler}>&#10005;</span>
            <h2 className={styles.CurFilters}>Current Filters</h2>
              <ul className={styles.CurFiltersList}>
                {
                  Object.entries(this.state.curFilters).map(([key, val], index) => {
                    if (val.length > 0) {
                      return <li className={styles.CurFiltersItem} key={index}><Filter close>{val}</Filter></li>
                    }
                    return null;
                  })
                }
              </ul>
            <h2 className={styles.Filters}>Filters</h2>
            <div className={styles.FiltersListContainer}>
              {
                Object.entries(this.state.filters).map(([key, val]) => {
                  return (
                    <Fragment key={key}>
                      <h3 className={styles.FilterCategory}>{key}</h3>
                      <ul className={styles.FiltersList}>
                        {
                          val.map(filter => {
                            return <li className={styles.FiltersItem} key={filter}><Filter>{filter}</Filter></li>
                          })
                        }
                      </ul>
                    </Fragment>
                  );
                })
              }
            </div>
          </div>
        </Backdrop> : null
        }
      </div>

    );
  }
}

export default Filters