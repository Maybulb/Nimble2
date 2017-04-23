import React from 'react';
import classname from 'classname';
import ColorPicker from 'components/ColorPicker';
import colors from 'assets/colors.json';
import './ThemeSetting.css';

function ThemeSetting({ color, onChange }) {
  const isCustomColor = Object.keys(colors).indexOf(color) === -1;
  return (
    <div className="ThemeSetting">
      {Object.keys(colors).map(name => (
        <div
          key={name}
          className={classname('ThemeSetting__option', {
            'ThemeSetting__option--selected': name === color,
          })}
          style={{
            backgroundColor: colors[name],
            boxShadow: `0 0 5px ${colors[name]}`,
          }}
          onClick={() => {
            if (name !== color && onChange) {
              onChange(name);
            }
          }}
        />
      ))}
      <ColorPicker
        color={isCustomColor ? color : '#fff'}
        selected={isCustomColor}
        onChange={onChange}
      />
    </div>
  );
}

export default ThemeSetting;
