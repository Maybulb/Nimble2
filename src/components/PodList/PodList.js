import React from 'react';
import Pod from 'components/Pod';
import './PodList.css';

function getDisplayPods(pods) {
  return pods.filter(pod => pod.id !== 'Input');
}

function PodList({ pods }) {
  const displayPods = getDisplayPods(pods);
  const length = displayPods.length;
  return (
    <div className="PodList">
      {displayPods.map((pod, index) => (
        <Pod
          key={index}
          data={pod}
          index={index}
          length={length}
        />
      ))}
    </div>
  );
}

export default PodList;
