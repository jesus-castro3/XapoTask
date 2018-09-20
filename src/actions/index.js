export const SET_PROJECT = 'SET_PROJECT';
export const SET_PROJECT_LIST = 'SET_PROJECT_LIST';
export const SET_PROJECT_LIST_ASYNC = 'SET_PROJECT_LIST_ASYNC';
export const SET_CONTRIBUTORS_ASYNC = 'SET_CONTRIBUTORS_ASYNC';
export const SET_CONTRIBUTORS = 'SET_CONTRIBUTORS';

export const SET_PROJECT_LIST_FAILED = 'SET_PROJECT_LIST_FAILED';
export const SET_CONTRIBUTORS_FAILED = 'SET_CONTRIBUTORS_FAILED';

export const projectList = projects => ({
  type: SET_PROJECT_LIST,
  projects: projects
});

export const loadProject = project => ({
  type: SET_PROJECT,
  project
});

export const loadProjectList = () => ({
  type: SET_PROJECT_LIST_ASYNC,
});

export const loadContributors = url => ({
  type: SET_CONTRIBUTORS_ASYNC,
  url
});

export const setContributors = contributors => ({
  type: SET_CONTRIBUTORS,
  contributors
});
