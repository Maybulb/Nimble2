import React from 'react';
import Error from 'components/Error';
import Credits from 'components/Credits';
import PodList from 'components/PodList';
import Interpretation from 'components/Interpretation';
import queryUrl from 'util/query-url';

function Results({ query, error, numpods, pods }) {
  if (error || !numpods) {
    return <Error query={query} />;
  }
  return (
    <div>
      <Interpretation pods={pods} />
      <PodList pods={pods} />
      <Credits url={queryUrl(query)} />
    </div>
  );
}

export default Results;
