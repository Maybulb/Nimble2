import React from 'react';
import Color from 'color';
import colors from '../assets/colors';

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
      .primary-color {
        color: ${primary};
      }
      .highlight-color {
        color: ${highlight};
      }
    `}</style>
  );
}

export default Theme;
