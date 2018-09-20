import React from 'react';
import PropTypes from 'prop-types';

const ProjectItem = ({ project, onClick }) => (
  <li
    className="project-list__item"
    onClick={() => onClick(project.contributors_url, project)}>
    {project.name}
  </li>
);

export default ProjectItem;

ProjectItem.propTypes = {
  project: PropTypes.object,
  onClick: PropTypes.func
};
