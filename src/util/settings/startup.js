import require from '../require';
const manifest = require('./package.json');
const AutoLaunch = require('auto-launch');

const launcher = new AutoLaunch({
  name: manifest.name,
});

export default enable => {
  return launcher.isEnabled().then(enabled => {
    if (enabled !== enable) {
      return enable
        ? launcher.enable()
        : launcher.disable();
    }
  });
};
