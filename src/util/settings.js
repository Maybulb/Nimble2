import require from './require';
const settings = require('electron-settings');

const defaultSettings = {
  startup: true,
  center: false,
  reportErrors: false,
  autoUpdate: true,
  suggestions: true,
  basicMath: true,
  theme: 'red',
};

Object.keys(defaultSettings).forEach(name => {
  if (!settings.has(name)) {
    settings.set(name, defaultSettings[name]);
  }
});

export default settings;
