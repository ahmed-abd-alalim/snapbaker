import { BrowserWindow, ipcMain } from 'electron'

export default (): void => {
  ipcMain.on('toggle-maximize-window', (event) => {
    const window = BrowserWindow.fromWebContents(event.sender)
    if (window?.isMaximized()) {
      window?.unmaximize()
    } else {
      window?.maximize()
    }
  })
}
