import React from 'react';

import styles from './PostItem.module.css';
import PillBadge from '../../UI/PillBadge/PillBadge';
import ProfilePic from '../../Profiles/ProfilePic/ProfilePic';

const postItem = props => {
  return (
    <div className={styles.PostItemContainer}>
      <div className={styles.CreatedBy}>
        <ProfilePic />
        {
          props.user ?
          <p className={styles.Name}>
            {props.user.Fname} {props.user.Lname}
          </p> : null
        }
      </div>
      <div className={styles.PostBrief}>
        <h2 className={styles.PostTitle}>
          {props.post.Title}
          <p className={styles.Timestamp}>
            {props.post.Time_posted}
          </p>
        </h2>

        <ul className={styles.CategoriesList}>
          {
            props.post.tags.map((cat, index) => {
              return (
                <li className={styles.Category} key={index}>
                  <PillBadge type='Orange'>{cat}</PillBadge>
                </li>
              );
            })
          }
        </ul>
      </div>
    </div>
  );
};

export default postItem;