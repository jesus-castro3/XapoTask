import React from 'react';
import ProjectListContainer from '../containers/ProjectListContainer'

const Sidebar = props => (
    <div className="sidebar">
       <h1>Facebook Projects</h1>
        <ProjectListContainer/>
    </div>
)

export default Sidebar;