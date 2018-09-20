import React from 'react';
import PropTypes from 'prop-types';

const ContributorsCard = ({ contributors }) => (
    <div className="project-card-container">
      {contributors.map(c => (
        <div key={c.id} className="project-card">
          <div className="project-card__avatar">
            <img src={c.avatar_url} alt="" />
          </div>
          <div className="project-card__user">
            <p>
              User:{' '}
              <a className="project-card__url" href={c.html_url} target="_blank">
                {c.login}
              </a>
            </p>
            <p>Contributions: {c.contributions}</p>
            <p>
              Profile:{' '}
              <a className="project-card_repos-url" href={c.html_url} target="_blank">
                here
              </a>
            </p>
          </div>
        </div>
      ))}
    </div>
);
        
export default ContributorsCard;

ContributorsCard.propTypes = {
  contributors: PropTypes.array
};