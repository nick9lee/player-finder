import * as actionTypes from './actions';
import axios from 'axios';

export const authStart = (email, password) => {
  // 1. Make HTTP Request

  // 2. If auth success, dispatch authSuccess

  // 3. If auth fail, dispatch authFail

  return authSuccess();
}

export const getUsers = () => {
  return dispatch => {
    axios.get(
      'http://localhost:3000/users'
    ).then(res => {
      dispatch({
        type: actionTypes.GET_USERS,
        users: res.data
      });
    });
  };
}

export const setUser = user => {
  return {
    type: actionTypes.SET_USER,
    user: user
  };
}

export const signup = data => {
  return  {
    type: actionTypes.SIGNUP,
    data: data
  };
}

export const authFail = errMsg => {
  return {
    type: actionTypes.AUTH_FAIL,
    errMsg: errMsg
  };
}

export const authSuccess = (user) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    user: user
  };
}

export const logout = () => {
  return {
    type: actionTypes.LOGOUT
  }
}