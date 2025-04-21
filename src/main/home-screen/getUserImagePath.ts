import { dialog, ipcMain } from 'electron'
import fs from 'fs'
import path from 'path'

export default (): void => {
  ipcMain.handle('get-user-image-path', async () => {
    const { canceled, filePaths } = await dialog.showOpenDialog({
      properties: ['openFile'],
      filters: [{ name: 'Images', extensions: ['png', 'jpg', 'jpeg', 'gif'] }]
    })

    if (canceled || filePaths.length === 0) return null

    const imgPath = filePaths[0]
    const imgBuffer = fs.readFileSync(imgPath)
    const ext = path.extname(imgPath).substring(1)
    const base64 = `data:image/${ext};base64,${imgBuffer.toString('base64')}`

    return base64
  })
}
