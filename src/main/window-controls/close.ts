import { ipcMain, BrowserWindow } from 'electron'

export default (): void => {
  ipcMain.on('close-window', (event) => {
    const window = BrowserWindow.fromWebContents(event.sender)
    window?.close()
  })
}
