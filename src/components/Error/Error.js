import React from 'react';
import PropTypes from 'prop-types';
import ExternalLink from 'components/ExternalLink';
import queryUrl from 'util/query-url';
import './Error.css';

function Error({ query }) {
  return (
    <div className="Error">
      <i
        className="Error__icon primary-color fa fa-frown-o"
        aria-hidden
      />
      <p>Sorry! I can't find the answer.</p>
      <p>
        Try searching it on <ExternalLink href={queryUrl(query)}>WolframAlpha</ExternalLink>.
      </p>
    </div>
  );
}

Error.propTypes = {
  query: PropTypes.string.isRequired,
};

export default Error;
