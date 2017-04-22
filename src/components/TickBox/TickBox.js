import React from 'react';
import classname from 'classname';
import './TickBox.css';

function TickBox({ selected, onChange }) {
  const handleChange = () => {
    onChange && onChange(!selected);
  };
  return (
    <span
      className={classname('TickBox', {
        'TickBox--selected': selected,
      })}
      onClick={handleChange}
    >
      <span className="fa-stack fa-lg">
        <i className="fa fa-circle-o fa-stack-2x" />
        <i className="fa fa-check fa-stack-1x" />
      </span>
      <input
        className="TickBox__input"
        type="checkbox"
        checked={selected}
        onChange={handleChange}
      />
    </span>
  );
}

export default TickBox;
