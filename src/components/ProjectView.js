import React, { Component } from 'react';
import ContributorsCard from './ContributorsCard';
import PropTypes from 'prop-types';

export default class ProjectView extends Component {

  displayProjectDetails(project) {
    return (project.hidden) ? 'hide' : 'project-view__details';
  }

  render() {
    const { contributors, project } = this.props;
    return (
      <div className="project-view">
        <h1 className="project-view__name">{project.name}</h1>
        <p className="project-view__description">{project.description}</p>
        <div className={this.displayProjectDetails(project)}>
          <p className="project-view__fork">Forks Count: {project.forks_count}</p>
          <p className="project-view__language">Language: {project.language}</p>
          <p className="project-view__open-issues">Open Issues: {project.open_issues_count}</p>
          <p className="project-view__stars">Stars: {project.stargazers_count}</p>
          <p className="project-view__watchers">Watchers: {project.watchers_count}</p>
        </div>
        <ContributorsCard contributors={contributors} />
      </div>
    );
  }
}

ProjectView.propTypes = {
  contributors: PropTypes.array,
  project: PropTypes.object
};
