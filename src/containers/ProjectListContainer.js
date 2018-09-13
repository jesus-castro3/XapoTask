import { loadProjectList, loadContributors } from '../actions';
import { connect } from 'react-redux';
import ProjectList from '../components/ProjectList';


const mapStateToProps = state => ({
    projects: state.projects
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: (contributors_url) =>         
            {
                dispatch(loadContributors(contributors_url))
            },
    loadProjectList: () =>
            dispatch(loadProjectList())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProjectList);