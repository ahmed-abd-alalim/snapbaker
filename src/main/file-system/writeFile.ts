import { ipcMain } from 'electron'
import fs from 'fs'

export default (): void => {
  ipcMain.on('save-file', (_event, data: object, path: string) => {
    fs.writeFile(path, JSON.stringify(data), (err) => {
      if (err) {
        console.error('Error writing file:', err)
        return
      }
    })
  })
}
