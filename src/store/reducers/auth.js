import * as actionTypes from '../actions/actions';

const initialState = {
  users: [],
  user: null,
  authFailed: false,
  errMsg: null
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.GET_USERS:
      return {
        ...state,
        users: action.users
      };
    case actionTypes.AUTH_SUCCESS:
      return {
        ...state,
        users: [],
        user: action.user,
        authFailed: false,
        errMsg: null
      };
    case actionTypes.AUTH_FAIL:
      return {
        ...state,
        users: [],
        user: null,
        authFailed: true,
        errMsg: action.errMsg
      };
    case actionTypes.LOGOUT:
      return {
        ...state,
        user: null,
        token: null,
        authFail: false,
        errMsg: null
      };
    default:
      return state;
  }
}

export default reducer;