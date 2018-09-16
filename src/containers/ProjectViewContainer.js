import ProjectView from '../components/ProjectView';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  contributors: state.contributors,
  project: state.project
});

export default connect(mapStateToProps)(ProjectView);
