import React, {Component, Fragment} from 'react';

import styles from './Posts.module.css';
import PostItem from '../../components/Posts/PostItem/PostItem';
import PostDetail from '../../components/Posts/PostDetail/PostDetail';
import PillBadge from '../../components/UI/PillBadge/PillBadge';
import Filters from '../Filters/Filters';

const user = {
  name: 'John Smith',
  profilePic: 'not an url'
};

const post = {
  title: 'Looking for doubles badminton player in the area',
  timestamp: 'March 4, 2021',
  location: 'America',
  categories: ['Badminton', 'Double Player']
}

class Posts extends Component {
  state = {
    filters: ['Most Recent', 'Most Response'],
    showFilterModal: false
  };

  render() {
    return (
      <Fragment>
        <Filters />
        <h1>Posts</h1>
        <div className={styles.FiltersContainer}>
          <h2 className={styles.FiltersTitle}>Filters</h2>
          <ul className={styles.FiltersList}>
            {
              this.state.filters.map((filt, index) => {
                return (
                  <li className={styles.Filter} key={index}>
                    <PillBadge type='PrimaryBorder' border>
                      <span className={styles.RemoveFilter}>&#9747;</span>{filt}
                    </PillBadge>
                  </li>
                );
              })
            }
          </ul>
        </div>
        <PostItem user={user} post={post}/>
        <PostItem user={user} post={post}/>
        <PostItem user={user} post={post}/>
        <PostItem user={user} post={post}/>
        <PostItem user={user} post={post}/>
        
        {/* <PostDetail user={user} post={post}/> */}
        
      </Fragment>
    );
  };
}

export default Posts;