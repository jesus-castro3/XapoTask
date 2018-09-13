import React, { Component } from 'react';
import { connect } from 'react-redux';

class ProjectView extends Component {
  render() {
    const { contributors } = this.props;
      return(
          <div>
              {}
          </div>
      )
  }
}

const mapStateToProps = (state) => ({
    contributors: state.contributors
});

export default connect(
    mapStateToProps
)(ProjectView);