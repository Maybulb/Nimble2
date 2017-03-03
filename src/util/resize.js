import require from './require';

const window = require('electron').remote.getCurrentWindow();
const element = document.querySelector('#root');
const MAX_HEIGHT = 600;

export default () => {
  const height = Math.min(element.clientHeight, MAX_HEIGHT);
  window.setSize(380, height, true);
};
