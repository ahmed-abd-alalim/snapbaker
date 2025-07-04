import { ipcMain } from 'electron'
import fs from 'fs'

export default (): void => {
  ipcMain.handle('get-all-projects-info', async () => {
    const projectsFolderPath = 'src/storage/projects'
    const allProjectsInfo: object[] = []

    // Read all subfolders
    const subfolders = fs
      .readdirSync(projectsFolderPath, { withFileTypes: true })
      .filter((dirent) => dirent.isDirectory())
      .map((dirent) => dirent.name)

    // Go through each subfolder
    subfolders.forEach((folder) => {
      const appJsonPath = `${projectsFolderPath}/${folder}/app.json`
      const pagesJsonPath = `${projectsFolderPath}/${folder}/pages.json`
      if (fs.existsSync(appJsonPath)) {
        const fileContent = fs.readFileSync(appJsonPath, 'utf-8')
        const pagesfileContent = fs.readFileSync(pagesJsonPath, 'utf-8')
        const newFileContent = {
          ...JSON.parse(fileContent),
          pagesNum: JSON.parse(pagesfileContent).length
        }
        try {
          allProjectsInfo.push(newFileContent)
        } catch (error) {
          console.error(`Invalid JSON in ${appJsonPath}`, error)
        }
      } else {
        console.warn(`app.json not found in ${folder}`)
      }
    })

    return allProjectsInfo
  })
}
