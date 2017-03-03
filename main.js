const menubar = require('menubar');

const mb = menubar({
  index: 'http://localhost:3000',
  preloadWindow: true,
  width: 380,
  height: 42,
  minHeight: 42,
});

mb.on('ready', event => {
  if (process.env.NODE_ENV === 'development') {
    mb.window.webContents.openDevTools({ mode: 'detach' });
  }
});
