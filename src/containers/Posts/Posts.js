import React, {Component, Fragment} from 'react';

import styles from './Posts.module.css';
import PostItem from '../../components/Posts/PostItem/PostItem';
import PostDetail from '../../components/Posts/PostDetail/PostDetail';
import PillBadge from '../../components/UI/PillBadge/PillBadge';
import Filters from '../Filters/Filters';
import Filter from '../../components/Filter/Filter';
import Pagination from '../../components/UI/Pagination/Pagination';
import PostList from '../../components/Posts/Posts';

const user = {
  name: 'John Smith',
  profilePic: 'not an url'
};

const posts = [
  {
    post: {
      title: 'Looking for doubles badminton player in the area',
      timestamp: 'March 4, 2021',
      location: 'America',
      categories: ['Badminton', 'Double Player'],
    },
    user: user
  }
]

class Posts extends Component {
  state = {
    filters: ['Most Recent', 'Most Response'],
    showFilterModal: false
  };

  render() {
    return (
      <Fragment>
        {/* <Filters /> */}
        <h1>Posts</h1>
        <div className={styles.FiltersContainer}>
          <h2 className={styles.FiltersTitle}>Filters</h2>
          <ul className={styles.FiltersList}>
            {
              this.state.filters.map((filt, index) => {
                return (
                  <li className={styles.Filter} key={index}>
                    <Filter close>{filt}</Filter>
                  </li>
                );
              })
            }
          </ul>
          <p className={styles.AddFilters}>Add Filters+</p>
        </div>
        <Pagination size={4} active={2} />
        <PostList posts={posts} />
        <Pagination size={4} active={2} />
        {/* <PostDetail user={posts[0].user} post={posts[0].post}/> */}
        
      </Fragment>
    );
  };
}

export default Posts;