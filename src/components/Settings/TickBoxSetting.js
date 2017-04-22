import React from 'react';
import TickBox from 'components/TickBox';
import './TickBoxSetting.css';

function TickBoxSetting({ selected, title, description, onChange }) {
  return (
    <label className="TickBoxSetting">
      <TickBox
        selected={selected}
        onChange={onChange}
      />
      <div className="TickBoxSetting__title">
        {title}
      </div>
      {description &&
        <div className="TickBoxSetting__description">
          {description}
        </div>
      }
    </label>
  );
}

export default TickBoxSetting;
