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
        user: null,
        authFailed: true,
        errMsg: action.errMsg
      };
    case actionTypes.LOGOUT:
      return {
        ...state,
        user: null,
        authFail: false,
        errMsg: null
      };
    case actionTypes.SIGNUP:
      const users = [...state.users];
      users.push(action.data);
      return {
        ...state,
        users: users
      };
    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.user
      };
    default:
      return state;
  }
}

export default reducer;