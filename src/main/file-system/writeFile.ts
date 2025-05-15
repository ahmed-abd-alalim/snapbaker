import { ipcMain } from 'electron'
import fs from 'fs'

export default (): void => {
  ipcMain.on('save-file', async (_event, data: object, path: string): Promise<void> => {
    const modules = {
      'setting.json': () => import('../../storage/setting.json'),
      'account.json': () => import('../../storage/account.json')
      // Add more as needed
    }

    const jsondata = await modules[path]()

    const jsonFilePath = `src/storage/${path}`

    Object.keys(data).forEach((key) => {
      if (data[key] !== jsondata.default[key]) {
        jsondata.default[key] = data[key]
      }
    })

    fs.writeFile(jsonFilePath, JSON.stringify(jsondata.default), (err) => {
      if (err) {
        console.error('Error writing file:', err)
        return
      }
    })
  })
}
