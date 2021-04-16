import React, {Component, Fragment} from 'react';
import axios from 'axios';

import styles from './PostDetail.module.css';
import PostItem from '../../../components/Posts/PostItem/PostItem';
import Comments from '../../../components/Posts/Comments/Comments';

class PostDetail extends Component {
  state = {
    post: {
      post: {
        tags: []
      },
      user: null,
      comments: []
    }
  }

  componentDidMount() {
    // Get post from api
    axios.get(
      `http://localhost:3000/posts/${this.props.match.params.id}`
    ).then(res => {
      console.log(res);
      const post = {
        post: {
          ...res.data,
          tags: ["Badminton", "Doubles Player"]
        },
        user: null,
        comments: []
      }

      axios.get(
        `http://localhost:3000/users/${post.Coach_ID}`
      ).then(userRes => {
        if (userRes.data !== 'user not found') {
          post.user = userRes.data;
        }
      });

      // Get comments associated with the post
      axios.get(
        'http://localhost:3000/comments'
      ).then(commentsRes => {
        commentsRes.data.forEach(comment => {
          if (comment.PID === res.data.PID) {
            post.comments.push(comment);
          }
        });

        if (post.comments.length === 0) {
          this.setState({post: post});
          return;
        }

        // Get user of each comment
        post.comments.forEach((comment, index) => {
          axios.get(
            `http://localhost:3000/users/${comment.UID}`
          ).then(usersRes => {
            comment.user = usersRes.data;
            if (index === post.comments.length - 1) {
              this.setState({post: post});
            }
          })
        });
      })
    })
  }
  render() {
    return (
      <Fragment>
        <div className={styles.DetailContainer}>
          <PostItem user={this.state.post.user} post={this.state.post.post}/>
          <p className={styles.PostBody}>
            {this.state.post.post.Body}
          </p>
          <div className={styles.CommentSection}>
            <Comments comments={this.state.post.comments} />
          </div>
        </div>
  
      </Fragment>
    );
  }
}

export default PostDetail;