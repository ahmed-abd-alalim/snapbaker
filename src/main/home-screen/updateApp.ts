import { ipcMain } from 'electron'
import fs from 'fs'

type DataType = {
  projectDate: string
  siteName: string
  cssFram: string
  jsFram: string
  themeColor: string
  pagesNum: number
}

export default (): void => {
  ipcMain.on('update-app', (_event, newData: DataType, oldData: DataType) => {
    const oldProjectsPath = `src/storage/projects/${oldData.siteName}`
    const newProjectsPath = `src/storage/projects/${newData.siteName}`

    if (oldData.siteName !== newData.siteName) {
      fs.renameSync(oldProjectsPath, newProjectsPath)
      fs.writeFileSync(`${newProjectsPath}/app.json`, JSON.stringify(newData))
    } else {
      fs.writeFileSync(`${oldProjectsPath}/app.json`, JSON.stringify(newData))
    }
  })
}
