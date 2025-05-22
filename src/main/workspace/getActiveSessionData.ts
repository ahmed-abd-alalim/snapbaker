import { ipcMain } from 'electron'
import fs from 'fs'

export default (): void => {
  ipcMain.handle('get-active-session-data', async (_, fileName) => {
    const projectsFolderPath = `src/storage/projects/${fileName}`
    let allActiveSessionData = {}

    // Read all subfolders
    const subfiles = ['app', 'pages', 'components']

    // Go through each subfolder
    subfiles.forEach((name) => {
      const JsonFilePath = `${projectsFolderPath}/${name}.json`

      if (fs.existsSync(JsonFilePath)) {
        const fileContent = fs.readFileSync(JsonFilePath, 'utf-8')

        try {
          allActiveSessionData = {
            ...allActiveSessionData,
            [name]: fileContent !== '' ? JSON.parse(fileContent) : fileContent
          }
        } catch (error) {
          console.error(`Invalid JSON in ${JsonFilePath}`, error)
        }
      } else {
        console.warn(`app.json not found in ${name}`)
      }
    })
    return allActiveSessionData
  })
}
