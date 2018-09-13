import React, { Component } from 'react';
import ProjectItem from './ProjectItem';

export default class ProjectList extends Component {

  componentDidMount(){
    this.props.loadProjectList();
  }

  render() {
    const { projects, onClick } = this.props;    
    return(
      <ul className="project-list">
        {projects.map(project => (
          <ProjectItem key={project.id} item={project} onClick={onClick} />
        ))}
      </ul>
    )
  }
}