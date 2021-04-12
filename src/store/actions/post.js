import axios from 'axios';
import * as actionTypes from './actions';

export const createPost = post => {
  const config = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  };

  axios.post(
    'http://localhost:3000/posts', post, config
  ).then(res => {
    console.log(res);
  })

  // 1. Make POST request

  // 2. Can fail

  return {
    type: actionTypes.CREATE_POST
  };
}

export const viewPosts = token => {
  // 1. Make GET request

  // 2. Can fail

  return {
    type: actionTypes.VIEW_POSTS
  };
}

export const viewPost = (postId, token) => {
  // 1. Make GET request

  // 2. Can fail

  return {
    type: actionTypes.VIEW_POST
  };
}

export const editPost = (postId, token) => {
  // 1. Make POST request

  // 2. Can fail

  return {
    type: actionTypes.EDIT_POST
  };
}

export const removePost = (postId, token) => {
  // 1. Make DELETE request

  // 2. Can fail

  return {
    type: actionTypes.REMOVE_POST
  };
}