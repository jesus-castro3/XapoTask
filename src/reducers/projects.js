import { SET_PROJECT_LIST, SET_PROJECT } from '../actions';

export const projects = (state = [], action) => {
  switch (action.type) {
    case SET_PROJECT_LIST:
      return action.projects;

    default:
      return state;
  }
};

export const project = (state = {}, action) => {
  switch (action.type) {
    case SET_PROJECT:
      return action.project;

    default:
      return state;
  }
};
