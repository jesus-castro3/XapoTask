import React, { Component } from 'react';
import ProjectItem from './ProjectItem';
import PropTypes from 'prop-types';

export default class ProjectList extends Component {
  componentDidMount() {
    this.props.loadProjectList();
  }

  render() {
    const { projects, onClick } = this.props;
    return (
      <ul className="project-list">
        {projects.map(project => (
          <ProjectItem key={project.id} project={project} onClick={onClick} />
        ))}
      </ul>
    );
  }
}

ProjectList.propTypes = {
  loadProjectList: PropTypes.func,
  onClick: PropTypes.func,
  projects: PropTypes.array
};
