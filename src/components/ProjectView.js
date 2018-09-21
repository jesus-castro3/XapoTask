import React from 'react';
import ContributorsCard from './ContributorsCard';
import PropTypes from 'prop-types';

const ProjectViewEmtpy = () => (
  <div className="project-view__empty">
    <h3>Select a project from the list to the left :)</h3>
  </div>
);

const ProjectView = ({contributors, project}) => {
  if(!project) { return <ProjectViewEmtpy/>; }
  return (
    <div className="project-view">
      <h1 className="project-view__name">{project.name}</h1>
      <p className="project-view__description">{project.description}</p>
      <div className="project-view__details">
        <p className="project-view__fork">Forks Count: {project.forks_count}</p>
        <p className="project-view__language">Language: {project.language}</p>
        <p className="project-view__open-issues">Open Issues: {project.open_issues_count}</p>
        <p className="project-view__stars">Stars: {project.stargazers_count}</p>
        <p className="project-view__watchers">Watchers: {project.watchers_count}</p>
      </div>
      <ContributorsCard contributors={contributors} />
    </div>
  )
}

export default ProjectView;

ProjectView.propTypes = {
  contributors: PropTypes.array,
  project: PropTypes.object
};
