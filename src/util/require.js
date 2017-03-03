const require = window.require;
const remote = require('electron').remote;

export default name => {
  try {
    return require(name);
  } catch (err) {
    return remote.require(name);
  }
};
