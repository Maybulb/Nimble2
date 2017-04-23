import React from 'react';
import './ColorPicker.css';

function ColorPicker({ color, selected, onChange }) {
  return (
    <label className="ColorPicker">
      <div
        className="ColorPicker__circle"
        style={{
          backgroundColor: color,
          boxShadow: selected ? `0 0 5px ${color}` : '',
        }}
      />
      <input
        type="color"
        value={color}
        onChange={event => onChange(event.target.value)}
      />
    </label>
  );
}

export default ColorPicker;
