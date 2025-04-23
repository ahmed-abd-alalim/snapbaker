import { BrowserWindow, ipcMain } from 'electron'

export default (): void => {
  ipcMain.on('minimize-window', (event) => {
    const window = BrowserWindow.fromWebContents(event.sender)
    window?.minimize()
  })
}
