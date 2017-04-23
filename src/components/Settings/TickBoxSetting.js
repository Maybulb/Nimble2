import React from 'react';
import classname from 'classname';
import TickBox from 'components/TickBox';
import './TickBoxSetting.css';

function TickBoxSetting({ selected, disabled, title, description, onChange }) {
  return (
    <label className={classname('TickBoxSetting', {
      'TickBoxSetting--disabled': disabled,
    })}>
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
