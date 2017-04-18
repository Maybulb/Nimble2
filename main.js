const menubar = require('menubar');
const debug = process.env.NODE_ENV === 'development';

const mb = menubar({
  index: 'http://localhost:3000',
  icon: __dirname + '/src/assets/menubar/menubar_iconTemplate.png',
  preloadWindow: true,
  width: 380,
  height: 42,
  minHeight: 42,
  resizable: false,
  webPreferences: {
    devTools: debug,
  },
});

mb.on('ready', event => {
  if (debug) {
    mb.window.webContents.openDevTools({
      mode: 'detach',
    });
  }
});
