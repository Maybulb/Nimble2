import React from 'react';
import classname from 'classname';
import colors from 'assets/colors.json';
import './ThemeSetting.css';

function ThemeSetting({ color, onChange }) {
  return (
    <div className="ThemeSetting">
      {Object.keys(colors).map(name => (
        <div
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
    </div>
  );
}

export default ThemeSetting;
