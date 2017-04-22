import React from 'react';
import './IconButton.css';

function IconButton({ icon, children, disabled, onClick }) {
  return (
    <button
      className="IconButton button primary-color"
      onClick={onClick}
      disabled={disabled}
    >
      {icon
        ? <i className={`fa fa-${icon}`} aria-hidden />
        : children
      }
    </button>
  );
}

IconButton.defaultProps = {
  disabled: false,
};

export default IconButton;
