import React, {Fragment} from 'react';

import styles from './Comment.module.css';
import ProfilePic from '../../../Profiles/ProfilePic/ProfilePic';

const comment = props => {
  return (
    <Fragment>
      <div className={styles.CommentHeading}>
        <ProfilePic />
        <h3 className={styles.Name}>
          {props.comment.Name ? props.comment.Name : 'John Smith'}
        </h3>
        <span className={styles.TimeStamp}>{props.comment.Time_Added ? props.comment.Time_Added : 'Time Ago'}</span>
      </div>
      <p className={styles.CommentBody}>
        {props.comment.Body ? props.comment.Body : 'This is the body of the comment.'}
      </p>
    </Fragment>

  );
};

export default comment;