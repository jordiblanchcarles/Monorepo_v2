import { contextBridge } from 'electron';

contextBridge.exposeInMainWorld('playerApp', {
  version: '1.0.0'
});
