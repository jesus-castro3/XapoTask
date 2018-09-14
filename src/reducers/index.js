import { combineReducers } from 'redux';
import { projects, project } from './projects';
import contributors from './contributors';
console.log(projects);
export default combineReducers({
    projects,
    project,
    contributors
});