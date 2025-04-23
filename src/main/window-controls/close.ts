import { ipcMain, BrowserWindow } from 'electron'

export default (): void => {
  ipcMain.on('close-window', (event) => {
    const window = BrowserWindow.fromWebContents(event.sender)
    // @ts-ignore (define in dts)
    if (window.name === 'main') {
      BrowserWindow.getAllWindows().forEach((win) => win.close())
    } else {
      window?.close()
    }
  })
}
