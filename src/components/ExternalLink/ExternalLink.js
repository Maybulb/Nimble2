import React from 'react';
import PropTypes from 'prop-types';
import require from 'util/require';
const { shell } = require('electron');

function ExternalLink({ href, ...props }) {
  return (
    <a
      {...props}
      onClick={(...args) => {
        shell.openExternal(href);
        props.onClick && props.onClick(...args);
      }}
    />
  );
}

ExternalLink.propTypes = {
  href: PropTypes.string.isRequired,
};

export default ExternalLink;
