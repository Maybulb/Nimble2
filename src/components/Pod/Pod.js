import React from 'react';
import PropTypes from 'prop-types';
import './Pod.css';

// Panel width - the padding either side
const RESULTS_WIDTH = 380 - 32;

function isGenericTitle(title) {
  const normalTitle = String(title).trim().toLowerCase();
  return (
    normalTitle === 'result' ||
    false
  );
}

function shouldDisplayTitle(title, index, length) {
  return (
    !length ||
    !isGenericTitle(title)
  );
}

function getImageDimensions(image) {
  let width = image.width / image.scale;
  let height = image.height / image.scale;
  if (width > RESULTS_WIDTH) {
    height *= RESULTS_WIDTH / width;
    width = RESULTS_WIDTH;
  }
  return { width, height };
}

function Pod({ data, index, length }) {
  const { subpods: pods } = data;
  return (
    <div className="Pod">
      {shouldDisplayTitle(data.title, index, length) &&
        <h3>{data.title}</h3>}
      {pods.map(({ img: image }) => (
        <div key={image.src}>
          <img
            src={image.src}
            alt={image.alt}
            {...getImageDimensions(image)}
            draggable="false"
          />
        </div>
      ))}
    </div>
  );
}

Pod.propTypes = {
  data: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  length: PropTypes.number.isRequired,
};

export default Pod;
