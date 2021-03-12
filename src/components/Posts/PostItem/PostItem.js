import React from 'react';

import styles from './PostItem.module.css';
import PillBadge from '../../UI/PillBadge/PillBadge';

const postItem = props => {
  return (
    <div className={styles.PostItemContainer}>
      <div className={styles.CreatedBy}>
        <div className={styles.ProfilePic}>&nbsp;</div>
        <p className={styles.Name}>
          {props.user.name}
          </p>
      </div>
      <div className={styles.PostBrief}>
        <h2 className={styles.PostTitle}>
          {props.post.title}
          <p className={styles.Timestamp}>
            {props.post.timestamp}
          </p>
        </h2>

        <ul className={styles.CategoriesList}>
          {
            props.post.categories.map((cat, index) => {
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