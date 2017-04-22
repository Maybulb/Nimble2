import React from 'react';
import './TitleBar.css';

function TitleBar({ title, left, right, children }) {
  if (children) {
    return (
      <div className="TitleBar primary">
        {children}
      </div>
    );
  } else {
    return (
      <div className="TitleBar primary">
        <div className="TitleBar__left">
          {left && left}
        </div>
        <div className="TitleBar__right">
          {right && right}
        </div>
        <div className="TitleBar__title">
          {title}
        </div>
      </div>
    );
  }
}

export default TitleBar;
