import * as actionTypes from '../actions/actions';

const initialState = {
  user: null,
  token: null,
  authFailed: false,
  errMsg: null
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.AUTH_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        authFailed: false,
        errMsg: null
      };
    case actionTypes.AUTH_FAIL:
      return {
        ...state,
        user: null,
        token: null,
        authFailed: true,
        errMsg: action.payload.errMsg
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