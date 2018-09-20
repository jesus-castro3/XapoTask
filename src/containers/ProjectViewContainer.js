import ProjectView from '../components/ProjectView';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  contributors: state.contributors,
  project: state.projects.find( p => p.id === state.setProject )
});

export default connect(mapStateToProps)(ProjectView);
