import React from 'react';
import Pod from './Pod';
import Error from './Error';
import Credits from './Credits';
import queryUrl from '../util/query-url';

function getInterpretation(pods) {
  let interpretation = null;
  for (let pod of pods) {
    if (pod.id === 'Input') {
      interpretation = pod.subpods[0].plaintext;
      break;
    }
  }
  return interpretation;
}

function getResults(pods) {
  return pods.filter(pod => pod.id !== 'Input');
}

function Results({ query, error, numpods, pods }) {
  if (error || !numpods) {
    return <Error query={query} />;
  }
  const interpretation = getInterpretation(pods);
  const results = getResults(pods);
  return (
    <div>
      {interpretation &&
        <div className="Interpretation highlight">
          <em>Interpreted as:</em> {interpretation}
        </div>}
      <div className="Pods">
        {results.map((pod, index) => (
          <Pod
            key={index}
            data={pod}
            index={index}
            length={results.length}
          />
        ))}
      </div>
      <Credits
        url={queryUrl(query)}
      />
    </div>
  );
}

export default Results;
