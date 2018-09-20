import { loadProjectList, setProject, loadContributors } from '../actions';
import { connect } from 'react-redux';
import ProjectList from '../components/ProjectList';

/** 
 * Sorts List of Items from Asc to Dec
 * @param {Array} projects - list of projects from facebooks github
 * @returns {Array} ordered list of projects
 */
const orderInAsc = projects =>
  projects.sort((a, b) => b.watchers_count - a.watchers_count);

const mapStateToProps = state => ({
  projects: orderInAsc(state.projects)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: (contributors_url, project) => {    
    dispatch(loadContributors(contributors_url));
    dispatch(setProject(project.id));
  },
  loadProjectList: () => dispatch(loadProjectList())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectList);
