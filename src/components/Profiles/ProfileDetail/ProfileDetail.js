import React, {Fragment} from 'react';

import styles from './ProfileDetail.module.css';
import ProfilePic from '../ProfilePic/ProfilePic';
import Pagination from '../../UI/Pagination/Pagination';

const profileDetail = props => {
  return (
    <Fragment>
      <div className={styles.ProfilePic}>
        <ProfilePic size="Mega" />
      </div>
      <h1>{props.user.Fname} {props.user.Lname}</h1>
      <p className={styles.Description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque volutpat augue sapien, in cursus erat dignissim eget. Aenean pellentesque enim at orci pretium, </p>
      <h2 className={styles.Posts}>{props.user.Fname}'s Posts</h2>
      {
        props.user.posts ?
        <Fragment>
          <Pagination size={3} active = {1} />
          <Pagination size={3} active = {1} />
        </Fragment>
        : null
      }

    </Fragment>
  );
};

export default profileDetail;