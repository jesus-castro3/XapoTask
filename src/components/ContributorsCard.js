import React, { Component } from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid/v4';

export default class ContributorsCard extends Component {
  render() {
    const { contributors } = this.props;
    return (
      <div className="project-card-container">
        {contributors.map(c => (
          <div key={uuid()} className="project-card">
            <div className="project-card__avatar">
              <img src={c.avatar_url} alt="" />
            </div>
            <div className="project-card__user">
              <p>
                User:{' '}
                <a className="project-card__url" href={c.url} target="_blank">
                  {c.login}
                </a>
              </p>
              <p>Contributions: {c.contributions}</p>
              <p>
                Repos:{' '}
                <a className="project-card_repos-url" href={c.repos_url} target="_blank">
                  here
                </a>
              </p>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

ContributorsCard.propTypes = {
  contributors: PropTypes.array
};