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

function reset(override = true) {
  Object.keys(defaultSettings).forEach(name => {
    if (override || !settings.has(name)) {
      settings.set(name, defaultSettings[name]);
    }
  });
}

reset(false);

export default settings;
export { reset };
