import React, {Fragment} from 'react';

import styles from './ProfileDetail.module.css';
import ProfilePic from '../ProfilePic/ProfilePic';
import PostItem from '../../Posts/PostItem/PostItem';
import Pagination from '../../UI/Pagination/Pagination';

const user = {
  name: 'John Smith',
  profilePic: 'not an url'
};

const post = {
  title: 'Looking for doubles badminton player in the area',
  timestamp: 'March 4, 2021',
  location: 'America',
  tags: ['Badminton', 'Double Player']
}

const profileDetail = props => {
  return (
    <Fragment>
      <div className={styles.ProfilePic}>
        <ProfilePic size="Mega" />
      </div>
      <h1>John Smith</h1>
      <p className={styles.Description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque volutpat augue sapien, in cursus erat dignissim eget. Aenean pellentesque enim at orci pretium, </p>
      <h2 className={styles.Posts}>John Smith's Posts</h2>
      <Pagination size={3} active = {1} />
      <PostItem user={user} post={post}/>
      <PostItem user={user} post={post}/>
      <PostItem user={user} post={post}/>
      <PostItem user={user} post={post}/>
      <PostItem user={user} post={post}/>
      <Pagination size={3} active = {1} />
    </Fragment>
  );
};

export default profileDetail;