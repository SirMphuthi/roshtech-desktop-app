// main.js
const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 1600, // Increased width for a better dashboard view
    height: 900, // Increased height
    webPreferences: {
      // The preload script is not needed for this simple wrapper application
      // preload: path.join(__dirname, 'preload.js') 
    },
    // You can add an icon for your app later if you wish
    // icon: path.join(__dirname, 'icon.png') 
  });

  // ===================================================================
  // IMPORTANT: This is the line you need to change.
  // Replace the URL below with the live ngrok URL from your
  // other terminal window where the cps-bonazonke server is running.
  // ===================================================================
  mainWindow.loadURL('https://5000-sirmphuthig-cpsbonazonk-38r00yym8w8.ws-eu120.gitpod.io');

  // You can uncomment the line below to open the developer tools for debugging
  // mainWindow.webContents.openDevTools();
}

// This method will be called when Electron has finished initialization.
app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
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
