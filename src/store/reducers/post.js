import * as actionTypes from '../actions/actions';

const initialState = {
  posts: [],
  viewedPost: null
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.CREATE_POST:
      return state;
    case actionTypes.VIEW_POST:
      return state;
    case actionTypes.VIEW_POSTS:
      return state;
    case actionTypes.EDIT_POST:
      return state;
    case actionTypes.REMOVE_POST:
      return state;
    default:
      return state;
  }
}