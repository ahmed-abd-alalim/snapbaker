import { ipcMain, BrowserWindow } from 'electron'

export default (): void => {
  ipcMain.on('close-window', (event) => {
    const window = BrowserWindow.fromWebContents(event.sender)
    // @ts-ignore (define in dts)
    // if (window.name === 'main') {
    //   BrowserWindow.getAllWindows().forEach((win) => win.close())
    // } else {

    BrowserWindow.getAllWindows().forEach((win) => {
      // if (win.name === 'workspace') {
      //   win?.webContents.send('session-not-active', true)
      // }
    })

    // window?.close()
    // }
  })
}
