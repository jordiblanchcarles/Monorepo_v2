import { app, BrowserWindow } from 'electron';
import path from 'path';
import { fileURLToPath } from 'url';
import { APP_NAME, getLayoutConfig } from '@cityadpro/common';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function createWindow() {
  const layout = getLayoutConfig('landscape');

  const win = new BrowserWindow({
    width: layout.width,
    height: layout.height,
    title: `${APP_NAME} Player`,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js')
    }
  });

  // Relative path to root / index.html from dist/main.js
  win.loadFile(path.join(__dirname, '../index.html'));
}

app.whenReady().then(() => {
  console.log(`Starting ${APP_NAME} Signage Player...`);
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
