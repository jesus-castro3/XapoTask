import React from 'react';

const ProjectItem = ({ item, onClick }) =>  (
    <li className="project-list__item" onClick={e => onClick(item.contributors_url) }>{item.name}</li>
)

export default ProjectItem;