import require from './require';

const window = require('electron').remote.getCurrentWindow();
const element = document.querySelector('#root');
const MAX_HEIGHT = 600;

const resize = () => {
  const height = Math.min(element.scrollHeight, MAX_HEIGHT);
  // console.debug('resizing window', height);
  window.setSize(380, height, true);
};

export default resize;

export function next() {
  setTimeout(resize);
};
