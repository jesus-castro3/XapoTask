import React from 'react';
import PropTypes from 'prop-types';

const ProjectItem = ({ project, onClick }) => (
  <li
    className="project-list__item"
    onClick={() => onClick(project.contributors_url, project)}
  >
    <div className="project-list__item-name">{project.name}</div>
    <div className="project-list__item-info">
      <span>{project.watchers_count}</span>
      <i className="illuminati" alt="watchers icon"/>
    </div>
  </li>
);

export default ProjectItem;

ProjectItem.propTypes = {
  project: PropTypes.object,
  onClick: PropTypes.func
};
