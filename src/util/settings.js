import startup from './settings/startup';
import require from './require';
const settings = require('electron-settings');

const defaultSettings = {
  startup: true,
  center: false,
  reportErrors: true,
  autoUpdate: true,
  suggestions: true,
  basicMath: true,
  theme: 'red',
};

const settingsSetup = {
  startup,
};

function reset(override = true) {
  Object.keys(defaultSettings).forEach(name => {
    if (override || !settings.has(name)) {
      settings.set(name, defaultSettings[name]);
      setup(name);
    }
  });
}

function setup(name) {
  if (name in settingsSetup) {
    const value = settings.get(name);
    return settingsSetup[name](value);
  }
}

reset(false);

export default settings;

export {
  reset,
  setup,
};
