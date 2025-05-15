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
  ipcMain.on('new-app', (_event, data: DataType) => {
    const newProjectsPath = `src/storage/projects/${data.siteName}`

    if (!fs.existsSync(newProjectsPath)) {
      fs.mkdirSync(newProjectsPath)
      //   console.log('Folder created:', folderPath)
    }

    fs.writeFile(`${newProjectsPath}/app.json`, JSON.stringify(data), (err) => {
      if (err) {
        console.error('Error writing file:', err)
        return
      }
    })
  })
}
