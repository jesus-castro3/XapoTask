import { call, put, takeLatest } from 'redux-saga/effects';
import { FB_GITHUB_REPOS_URL } from './constants';
import { fetchApi } from './api';
import {
  SET_PROJECT_LIST_ASYNC,
  SET_CONTRIBUTORS_ASYNC,
  SET_PROJECT_LIST_FAILED,
  SET_CONTRIBUTORS_FAILED,
  projectList,
  setContributors
} from './actions';

function* fetchProjects() {
    const projects = yield call(fetchApi, [ FB_GITHUB_REPOS_URL]);
    const { error } = projects;
    if(error) {
      yield put({ type: SET_PROJECT_LIST_FAILED, error });
    } else {
      yield put(projectList(projects));
    }
}

function* fetchContributors({action, url}) {
  const contributors = yield call(fetchApi, [url]);
  const { error } = contributors;
  
  if(error) {
    yield put({ type: SET_CONTRIBUTORS_FAILED, error });
  } else {
    yield put(setContributors(contributors));
  }
}

export default function* root() {
  yield takeLatest(SET_CONTRIBUTORS_ASYNC, fetchContributors);
  yield takeLatest(SET_PROJECT_LIST_ASYNC, fetchProjects);
}
