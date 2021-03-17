import React from 'react';

import PostItem from './PostItem/PostItem';

const posts = props => {
  return (
    <ul>
    {
      props.posts.map((p, index) => {
        return <PostItem user={p.user} post={p.post} key={index} />
      })
    }
  </ul>
  );
};

export default posts;