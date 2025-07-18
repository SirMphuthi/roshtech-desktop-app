// main.js

const { app, BrowserWindow } = require('electron');
const path = require('path');

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 1280,
    height: 800,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    },
    icon: path.join(__dirname, 'icon.png') // We will add an icon later
  });

  // IMPORTANT: This is where you will paste the ngrok URL of your running Flask application.
  // For now, we will use a placeholder.
  mainWindow.loadURL('https://YOUR-NGROK-URL.ngrok-free.app');

  // Open the DevTools (for debugging) - you can remove this for production
  // mainWindow.webContents.openDevTools();
};

// This method will be called when Electron has finished initialization.
app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

// Quit when all windows are closed, except on macOS.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

