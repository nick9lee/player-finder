import React, {Component, Fragment} from 'react';
import axios from 'axios';

import styles from './Posts.module.css';
import Filters from '../Filters/Filters';
import Filter from '../../components/Filter/Filter';
import Pagination from '../../components/UI/Pagination/Pagination';
import PostList from '../../components/Posts/Posts';

class Posts extends Component {
  state = {
    filters: [],
    showFilters: false,
    posts: []
  };

  toggleFilters = () => {
    this.setState(prevState => {
      return {
        showFilters: !prevState.showFilters
      }
    });
  }

  componentDidMount() {
    axios.get(
      'http://localhost:3000/posts'
    ).then(res => {
      const posts = [];
      res.data.forEach(p => {
        const post = {
          post: {
            ...p,
            tags: ["Badminton", "Doubles Player"]
          },
          user: null
        };

        axios.get(
          `http://localhost:3000/users/${p.Coach_ID}`
        ).then(userRes => {
          if (userRes.data !== 'user not found') post.user = userRes.data;
        }).catch(e => {
        });
        posts.push(post);
      });
      this.setState({posts: posts});
    });
  }

  render() {
    return (
      <Fragment>
        <Filters show={this.state.showFilters} closeHandler={this.toggleFilters} />
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
          <div className={styles.AddFiltersContainer}>
            <span className={styles.AddFilters} onClick={this.toggleFilters}>Add Filters+</span>
          </div>
        </div>

        <Pagination size={4} active={1} />
        <PostList posts={this.state.posts} />
        <Pagination size={4} active={1} />
        {/* <PostDetail user={posts[0].user} post={posts[0].post}/> */}
        
      </Fragment>
    );
  };
}

export default Posts;