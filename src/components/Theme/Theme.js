import React from 'react';
import PropTypes from 'prop-types';
import Color from 'color';
import colors from 'assets/colors.json';

function Theme({ color }) {
  const primary = colors[color];
  const highlight = Color(primary).lighten(.3).hex();
  const dark = Color(primary).darken(.1).hex();
  return (
    <style>{`
      .primary {
        background-color: ${primary};
      }
      .highlight {
        background-color: ${highlight};
      }
      .dark {
        background-color: ${dark};
      }
      a,
      .primary-color {
        color: ${primary};
      }
      .highlight-color {
        color: ${highlight};
      }
      .dark-color {
        color: ${dark};
      }
      .primary,
      .highlight,
      .dark {
        transition: background-color .5s ease-in-out;
      }
      .primary-color,
      .highlight-color,
      .dark-color {
        transition: color .5s ease-in-out;
      }
    `}</style>
  );
}

Theme.propTypes = {
  color: PropTypes.oneOf(Object.keys(colors)),
};

export default Theme;
