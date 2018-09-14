import React, { Component } from 'react';


export default class ContributorsCard extends Component {
    render() {
        const { contributors } = this.props;
        return <div className="project-card-container">
            {contributors.map(c =>
            <div className="project-card">
              <div className="project-card__avatar">
                <img src={c.avatar_url} alt="" />
              </div>
              <div className="project-card__user">
                <p>
                  User: <a hrer={c.url} target="_blank">
                    {c.login}
                  </a>
                </p>
                <p>Contributions: {c.contributions}</p>
                <p>
                  Repos: <a href={c.repos_url} target="_blank">
                    here
                  </a>
                </p>
              </div>
            </div>
          )}
        </div>
    }
}