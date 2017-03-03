import React from 'react';

const RESULTS_WIDTH = 380 - 32;

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

function WolframAlphaResults({ pods }) {
  const interpretation = getInterpretation(pods);
  return (
    <div>
      {interpretation &&
        <div className="Interpretation highlight">
          <em>Interpreted as:</em> {interpretation}
        </div>}
      <div className="Pods">
        {getResults(pods).map((pod, index, results) => (
          <div key={pod.id} className="Pod">
            {results.length > 1 && <h3>{pod.title}</h3>}
            {pod.subpods.map((info, index) => {
              //const width = info.img.width / 2;
              //const height = info.img.height * Math.min(1, (380 - 32) / width);
              let width = info.img.width / 2;
              let height = info.img.height / 2;
              if (width > RESULTS_WIDTH) {
                height *= RESULTS_WIDTH / width;
                width = RESULTS_WIDTH;
              }
              return (
                <div key={info.img.src}>
                  <img
                    src={info.img.src}
                    alt={info.img.alt}
                    width={width}
                    height={height}
                    draggable="false"
                  />
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}

export default WolframAlphaResults;
