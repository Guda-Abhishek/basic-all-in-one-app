/* eslint-disable no-undef */
const { app, BrowserWindow } = require('electron');
const connectDB = require('../backend/db')
// eslint-disable-next-line no-unused-vars
const path = require('path');

function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: true
    }
  });

  win.loadURL('http://localhost:5173');
}


app.whenReady().then(() => {
  createWindow();
  connectDB();
  console.log("App was running successfully");
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
