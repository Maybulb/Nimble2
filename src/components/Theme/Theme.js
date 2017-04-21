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
      }
      .highlight {
        background-color: ${highlight};
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
