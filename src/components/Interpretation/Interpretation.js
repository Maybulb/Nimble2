import React from 'react';
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

export default Interpretation;
