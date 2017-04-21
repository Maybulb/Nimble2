import React from 'react';
import PropTypes from 'prop-types';
import './Interpretation.css';

function getText(pods) {
  let interpretation = null;
  for (let pod of pods) {
    if (pod.id === 'Input') {
      interpretation = pod.subpods[0].plaintext;
      break;
    }
  }
  return interpretation;
}

function Interpretation({ pods }) {
  const text = getText(pods);
  if (!text) {
    return null;
  }
  return (
    <div className="Interpretation highlight">
      <em>Interpreted as:</em> {text}
    </div>
  );
}

Interpretation.propTypes = {
  pods: PropTypes.array.isRequired, // Array<WAPod>
};

export default Interpretation;
