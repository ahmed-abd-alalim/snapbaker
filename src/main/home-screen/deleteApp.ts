import { ipcMain } from 'electron'
import fs from 'fs'

export default (): void => {
  ipcMain.on('delete-app', (_event, appName: string) => {
    const newProjectsPath = `src/storage/projects/${appName}`

    if (fs.existsSync(newProjectsPath)) {
      fs.rmSync(newProjectsPath, { recursive: true, force: true })
      //   console.log('Folder created:', folderPath)
    }
  })
}
