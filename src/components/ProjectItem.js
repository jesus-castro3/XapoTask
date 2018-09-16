import React from 'react';

const ProjectItem = ({ project, onClick }) =>  (
    <li className="project-list__item" onClick={e => onClick(project.contributors_url, project)}>{project.name}</li>
)

export default ProjectItem; 