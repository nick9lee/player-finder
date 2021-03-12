import * as actionTypes from '../actions/actions';

const initialState = {
  profiles: [],
  viewingProfile: null
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.CREATE_PROFILE:
      return state;
    case actionTypes.VIEW_PROFILE:
      return state;
    case actionTypes.VIEW_PROFILES:
      return state;
    case actionTypes.EDIT_PROFILE:
      return state;
    case actionTypes.REMOVE_PROFILE:
      return state;
    default:
      return state;
  }
}

export default reducer;