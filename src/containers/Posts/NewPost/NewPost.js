import axios from 'axios';
import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import styles from './NewPost.module.css';

class NewPost extends Component {
  state = {
    formControls: {
      title: {
        type: 'text',
        placeholder: 'Title',
        value: ''
      },
      body: {
        value: '',
        placeholder: 'Post Body'
      }
    }
  };

  titleOnChangeHandler = event => {
    const newControls = {...this.state.formControls};
    newControls.title = {
      ...this.state.formControls.title,
      value: event.target.value
    };
    this.setState({
      formControls: newControls
    });
  };

  bodyOnChangeHandler = event => {
    const newControls = {...this.state.formControls};
    newControls.body = {
      ...this.state.formControls.body,
      value: event.target.value
    };
    this.setState({
      formControls: newControls
    });
  };

  onSubmitHandler = event => {
    event.preventDefault();

    const post = {
      Title: this.state.formControls.title.value,
      Body: this.state.formControls.body.value,
      UID: this.props.user.UID
    };

    const config = {
      headers: {
        'content-type': 'application/x-www-form-urlencoded'
      }
    };

    const params = new URLSearchParams();

    params.append('Title', this.state.formControls.title.value);
    params.append('Body', this.state.formControls.body.value);
    params.append('UID', this.props.user.UID);

    axios.post(
      'http://localhost:3000/posts', params, config
    ).then(res => {
      console.log(res);
      this.props.history.push({pathname: '/posts'});
    });
  }

  redirect() {
    if (!this.props.user) return <Redirect to='/login' />
    return null;
  }

  render() {
    return (
      <Fragment>
        {this.redirect()}
        <div className={styles.Container}>
          <h1>New Post</h1>
          <form onSubmit={this.onSubmitHandler}>
            <div className={styles.FormGroup}>
              <input
                type={this.state.formControls.title.type}
                placeholder={this.state.formControls.title.placeholder}
                value={this.state.formControls.title.value}
                onChange={this.titleOnChangeHandler}
                className={styles.Input}
              />
              <textarea
                placeholder={this.state.formControls.body.placeholder}
                value={this.state.formControls.body.value}
                onChange={this.bodyOnChangeHandler}
                className={styles.Textarea}
              />
            </div>
            <button className={styles.SubmitBtn}>Post</button>
          </form>
        </div>
      </Fragment>

    );
  };
}

const mapStateToProps = state => {
  return {
    user: state.auth.user
  }
};

export default connect(mapStateToProps)(NewPost);