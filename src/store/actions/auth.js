import * as actionTypes from './actions';

export const authStart = (email, password) => {
  // 1. Make HTTP Request

  // 2. If auth success, dispatch authSuccess

  // 3. If auth fail, dispatch authFail

  return authSuccess();
}

const authFail = errMsg => {
  return {
    type: actionTypes.AUTH_FAIL,
    payload: {
      errMsg: errMsg
    }
  };
}

const authSuccess = (user, token) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    payload: {
      user: user,
      token: token
    }
  };
}

export const logout = () => {
  localStorage.removeItem('token');
  return {
    type: actionTypes.LOGOUT
  }
}