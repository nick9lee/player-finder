import React, {Fragment} from 'react';

import styles from './PostDetail.module.css';
import PostItem from '../PostItem/PostItem';
import Comments from '../Comments/Comments';

const postDetail = props => {
  return (
    <Fragment>
      <div className={styles.DetailContainer}>
        <PostItem user={props.user} post={props.post}/>
        <p className={styles.PostBody}>
          {/* props.post.body */}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque volutpat augue sapien, in cursus erat dignissim eget. Aenean pellentesque enim at orci pretium, in aliquet enim semper. Maecenas vitae finibus massa, malesuada viverra purus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget elit vel lectus interdum luctus. Duis eget orci convallis, viverra purus non, efficitur nulla. In lectus ante, faucibus eget ante sit amet, tempus accumsan purus. Donec suscipit arcu tristique, vestibulum quam at, dictum leo. Ut purus ligula, varius eu imperdiet ut, porta id elit. Praesent ut feugiat metus. Ut semper mattis neque sed placerat. Suspendisse dapibus nibh sit amet nisi lobortis, sed sagittis erat cursus. Cras nec imperdiet elit, sit amet consectetur lacus.
        </p>
        <div className={styles.CommentSection}>
          <Comments />
        </div>
      </div>

    </Fragment>
  );
};

export default postDetail;