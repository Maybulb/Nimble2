import React from 'react';
import PropTypes from 'prop-types';
import InlineSVG from 'jacobmarshall-react-inline-svg';
import ExternalLink from 'components/ExternalLink';
import queryUrl from 'util/query-url';
import './Credits.css';

function Credits({ query, onClickSettings }) {
  return (
    <div className="Credits dark">
      <span
        className="Credits__settings fa fa-cog"
        onClick={onClickSettings}
      />
      powered by
      <ExternalLink href={queryUrl(query)}>
        <InlineSVG
          src={require('assets/wolfram-alpha.svg')}
        />
      </ExternalLink>
    </div>
  );
}

Credits.propTypes = {
  query: PropTypes.string.isRequired,
  onClickSettings: PropTypes.func.isRequired,
};

export default Credits;
