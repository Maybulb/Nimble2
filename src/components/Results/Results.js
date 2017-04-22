import React from 'react';
import PropTypes from 'prop-types';
import Error from 'components/Error';
import PodList from 'components/PodList';
import Interpretation from 'components/Interpretation';

function Results({ query, error, numpods, pods }) {
  if (error || !numpods) {
    return <Error query={query} />;
  }
  return (
    <div>
      <Interpretation pods={pods} />
      <PodList pods={pods} />
    </div>
  );
}

Results.propTypes = {
  query: PropTypes.string.isRequired,
  error: PropTypes.bool.isRequired,
  numpods: PropTypes.number.isRequired,
  pods: PropTypes.array,
};

export default Results;
