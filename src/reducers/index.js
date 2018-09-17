import { combineReducers } from 'redux';
import * as projects from './projects';
import * as contributors from './contributors';

export default combineReducers({
  ...projects,
  ...contributors
});
