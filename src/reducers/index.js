import { combineReducers } from 'redux';
import projects from './projects';
import contributors from './contributors';

export default combineReducers({
    projects,
    contributors
});