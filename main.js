const menubar = require('menubar');
const path = require('path');
const dev = require('electron-is-dev');

const index = (
  dev
    ? 'http://localhost:3000'
    : path.join(__dirname, 'build/index.html')
);

const mb = menubar({
  index,
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
