import { ipcMain } from 'electron'
import fs from 'fs'

export default (): void => {
  ipcMain.on('update-file', async (_event, data: object, path: string): Promise<void> => {
    const jsonFilePath = `src/storage/projects/${path}`

    fs.writeFile(jsonFilePath, JSON.stringify(data), (err) => {
      if (err) {
        console.error('Error writing file:', err)
        return
      }
    })
  })
}
