import React, { Component } from 'react';
import ContributorsCard from './ContributorsCard';

export default class ProjectView extends Component {
  render() {
    const { contributors, project } = this.props;
      return(
          <div className="project-view">
              <h1>{project.name}</h1>
              <p>{project.description}</p>
              <div className="project-view__details">
                <p>Forks Count: {project.forks_count}</p>
                <p>Language: {project.language}</p>
                <p>Open Issues: {project.open_issues_count}</p>
                <p>Stars: {project.stargazers_count}</p>
                <p>Watchers: {project.watchers_count}</p>
              </div>
            <ContributorsCard contributors={contributors}></ContributorsCard>
          </div>
      )
  }
}