import { combineReducers } from 'redux';
import { projects, project } from './projects';
import contributors from './contributors';

export default combineReducers({
  projects,
  project,
  contributors
});
