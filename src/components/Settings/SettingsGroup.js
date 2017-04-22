import React from 'react';
import './SettingsGroup.css';

function SettingsGroup({ title, children }) {
  return (
    <section className="SettingsGroup">
      <h1 className="SettingsGroup__title">
        {title}
      </h1>
      <div className="SettingsGroup__options">
        {children}
      </div>
    </section>
  );
}

export default SettingsGroup;
