import React, {Fragment} from 'react';

import styles from './Comments.module.css';
import Comment from './Comment/Comment';

const comments = props => {
  return (
    <Fragment>
      <h2 className={styles.Comments}>Comments</h2>
      <ul>
        <li className={styles.CommentItem}><Comment /></li>
        <li className={styles.CommentItem}><Comment /></li>
        <li className={styles.CommentItem}><Comment /></li>
      </ul>
      {
        // props.comments.map(comment => {
        //   return <Comment />
        // })
      }
    </Fragment>
  );
};

export default comments;