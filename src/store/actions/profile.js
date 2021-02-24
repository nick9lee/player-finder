import * as actionTypes from './actions';

export const createProfile = (profile, token) => {
  // 1. Make POST request to server to make the profile

  // 2. Can fail

  return {
    type: actionTypes.CREATE_PROFILE,
  };
}

export const viewProfile = profileId => {
  // 1. Make GET request to server

  return {
    type: actionTypes.VIEW_PROFILE
  };
}

export const viewProfiles = () => {
  // 1. Make GET request to server

  return {
    type: actionTypes.VIEW_PROFILES
  };
}

export const editProfile = (profileId, token) => {
  // 1. Make POST request to server

  // 2. Can fail

  return {
    type: actionTypes.EDIT_PROFILE
  };
}