import React from 'react';
import PropTypes from 'prop-types';
import Color from 'color';
import colors from 'assets/colors.json';

function Theme({ color }) {
  const primary = colors[color];
  const highlight = Color(primary).lighten(.3).hex();
  return (
    <style>{`
      .primary {
        background-color: ${primary};
        transition: background-color .5s ease-in-out;
      }
      .highlight {
        background-color: ${highlight};
      }
      .primary-color {
        transition: color .5s ease-in-out;
      }
      a,
      .primary-color {
        color: ${primary};
      }
      .highlight-color {
        color: ${highlight};
      }
    `}</style>
  );
}

Theme.propTypes = {
  color: PropTypes.oneOf(Object.keys(colors)),
};

export default Theme;
