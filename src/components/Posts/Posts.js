import React from 'react';
import {Link} from 'react-router-dom';

import PostItem from './PostItem/PostItem';

const posts = props => {
  console.log(props);
  return (
    <ul>
    {
      props.posts.map((p, index) => {
        return <Link to={`/posts/${p.post.PID}`} key={index}><PostItem user={p.user} post={p.post} /></Link>
      })
    }
  </ul>
  );
};

export default posts;