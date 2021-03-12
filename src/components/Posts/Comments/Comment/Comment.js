import React, {Fragment} from 'react';

import styles from './Comment.module.css';
import ProfilePic from '../../../Profiles/ProfilePic/ProfilePic';

const comment = props => {
  return (
    <Fragment>
      <div className={styles.CommentHeading}>
        <ProfilePic />
        <h3 className={styles.Name}>
          John Smith
        </h3>
        <span className={styles.TimeStamp}>Time Ago</span>
      </div>
      <p className={styles.CommentBody}>
        This is the body of a comment
      </p>
    </Fragment>

  );
};

export default comment;