const menubar = require('menubar');
const dev = require('electron-is-dev');

const mb = menubar({
  index: dev
    ? 'http://localhost:3000'
    : `file://${__dirname}/bundle/index.html`,
  icon: __dirname + '/src/assets/menubar/menubar_iconTemplate.png',
  preloadWindow: true,
  width: 380,
  height: 42,
  minHeight: 42,
  resizable: false,
  webPreferences: {
    devTools: dev,
  },
});

mb.on('ready', event => {
  if (dev) {
    mb.window.webContents.openDevTools({
      mode: 'detach',
    });
  }
});
