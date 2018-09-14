import { loadProjectList, loadProject, loadContributors } from '../actions';
import { connect } from 'react-redux';
import ProjectList from '../components/ProjectList';


const orderInAsc = projects =>
    projects.sort( (a,b) => b.watchers_count - a.watchers_count)

const mapStateToProps = state => ({
    projects: orderInAsc(state.projects)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: (contributors_url, project) => {
        dispatch(loadContributors(contributors_url));
        dispatch(loadProject(project));
    },
    loadProjectList: () => dispatch(loadProjectList())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProjectList);