import { SET_CONTRIBUTORS, SET_CONTRIBUTORS_FAILED } from '../actions';

export const contributors = (state = [], action) => {
  switch (action.type) {
    case SET_CONTRIBUTORS:
      return action.contributors;

    default:
      return state;
  }
};

export const contributorsFailed = (state = [], action) => {
  switch (action.type) {
    case SET_CONTRIBUTORS_FAILED:
      return action.error;

    default:
      return state;
  }
};