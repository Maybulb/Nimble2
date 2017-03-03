import React from 'react';
import require from '../util/require';
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

export default ExternalLink;
