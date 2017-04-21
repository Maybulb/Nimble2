import React from 'react';
import PropTypes from 'prop-types';
import InlineSVG from 'jacobmarshall-react-inline-svg';
import ExternalLink from 'components/ExternalLink';
import './Credits.css';

function Credits({ url }) {
  return (
    <div className="Credits primary">
      powered by
      <ExternalLink href={url}>
        <InlineSVG
          src={require('assets/wolfram-alpha.svg')}
        />
      </ExternalLink>
    </div>
  );
}

Credits.propTypes = {
  url: PropTypes.string.isRequired,
};

export default Credits;
