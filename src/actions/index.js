import uuid from 'uuid/v4'


export const SET_PROJECT_LIST = 'SET_PROJECT_LIST'
export const SET_PROJECT_LIST_ASYNC = 'SET_PROJECT_LIST_ASYNC';
export const SET_CONTRIBUTORS_ASYNC = 'SET_CONTRIBUTORS_ASYNC';
export const SET_CONTRIBUTORS = 'SET_CONTRIBUTORS';

export const projectList = projects => ({
    type: SET_PROJECT_LIST,
    id: uuid(),
    projects: projects
})

export const loadProjectList = () => ({
    type: SET_PROJECT_LIST_ASYNC,
    id: uuid()
})
export const loadContributors = (url) => ({
    type: SET_CONTRIBUTORS_ASYNC,
    id: uuid(),
    url: url
})

export const setContributor = contributor => ({
    type: SET_CONTRIBUTORS,
    id: uuid(),
    contributor: contributor
})