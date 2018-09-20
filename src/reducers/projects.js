import {
  SET_PROJECT_LIST,
  SET_PROJECT,
  SET_PROJECT_LIST_FAILED
} from '../actions';

export const projects = (state = [], action) => {
  switch (action.type) {
    case SET_PROJECT_LIST:
      return action.projects;
    default:
      return state;
  }
};

export const setProject = (state = null, action) => {
  switch (action.type) {
    case SET_PROJECT:
      return action.id;
    default:
      return state;    
  }
};

export const projectsFailed = (state = {}, action) => {
  switch (action.type) {
    case SET_PROJECT_LIST_FAILED:
      return {...action};

    default:
      return state;
  }
};

