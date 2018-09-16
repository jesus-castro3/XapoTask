import axios from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import {
  SET_PROJECT_LIST_ASYNC,
  SET_CONTRIBUTORS_ASYNC,
  projectList,
  setContributors
} from './actions';

function fetchApi([url]) {
  return axios
    .get(url)
    .then(
      res => res.data,
      error => ({
        error: error.message || 'something really bad happened, bad hombres :('
      })
    );
}

function* fetchProjects() {
  try {
    const projects = yield call(fetchApi, [
      'https://api.github.com/orgs/facebook/repos'
    ]);
    yield put(projectList(projects));
  } catch (e) {
    yield put({ type: 'SET_PROJECT_LIST_FAILED', msg: e.message });
  }
}

function* fetchContributors(action) {
  try {
    const contributors = yield call(fetchApi, [action.url]);
    yield put(setContributors(contributors));
  } catch (e) {
    yield put({ type: 'SET_CONTRIBUTORS_FAILED', msg: e.message });
  }
}

export default function* root() {
  yield takeLatest(SET_CONTRIBUTORS_ASYNC, fetchContributors);
  yield takeLatest(SET_PROJECT_LIST_ASYNC, fetchProjects);
}
