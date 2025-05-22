import { app, shell, BrowserWindow, ipcMain } from 'electron'
import { join } from 'path'
import { electronApp, optimizer, is } from '@electron-toolkit/utils'

// window controls
import { Close, Minimize, Maximize } from './window-controls'

// home-screen funcs
import {
  GetUserImagePath,
  WriteFile,
  NewApp,
  DeleteApp,
  updateApp,
  getAllProjectsInfo
} from './home-screen'

// workSpace funcs
import { GetActiveSessionData } from './workspace'

// app icon
import icon from '../../resources/icon.png?asset'

// array for func in appReady func
const funAppReady = [
  GetUserImagePath,
  WriteFile,
  NewApp,
  DeleteApp,
  updateApp,
  getAllProjectsInfo,
  GetActiveSessionData
]

// array for func out appReady func
const funOut = [Close, Minimize, Maximize]

function createWindow(): void {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    minWidth: 600,
    minHeight: 500,
    show: false,
    frame: false,
    autoHideMenuBar: true,
    icon: icon,
    webPreferences: {
      preload: join(__dirname, '../preload/index.js'),
      sandbox: false
    }
  })

  // @ts-ignore (define in dts)
  mainWindow.name = 'main'

  mainWindow.on('ready-to-show', () => {
    mainWindow.show()
  })

  mainWindow.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url)
    return { action: 'deny' }
  })

  // Load the remote URL for development or the local html file for production.
  if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
    mainWindow.loadURL(process.env['ELECTRON_RENDERER_URL'])
    // mainWindow.loadURL(`${process.env['ELECTRON_RENDERER_URL']}/workspace`)
  } else {
    mainWindow.loadFile(join(__dirname, '../renderer/index.html'))
  }
}

function createOtherWindow(): void {
  const newWindow = new BrowserWindow({
    width: 900,
    height: 700,
    minWidth: 800,
    minHeight: 600,
    show: false,
    frame: false,
    autoHideMenuBar: true,
    icon: icon,
    webPreferences: {
      preload: join(__dirname, '../preload/index.js'),
      sandbox: false
    }
  })

  // @ts-ignore (define in dts)
  newWindow.name = 'workspace'

  newWindow.once('ready-to-show', () => {
    newWindow.show()
  })

  newWindow.webContents.setWindowOpenHandler(({ url }) => {
    shell.openExternal(url)
    return { action: 'deny' }
  })

  // Load the remote URL for development or the local html file for production.
  if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
    newWindow.loadURL(`${process.env['ELECTRON_RENDERER_URL']}/workspace`)
  } else {
    newWindow.loadFile(join(__dirname, '../renderer/index.html'), {
      hash: '/workspace'
    })
  }
}

app.whenReady().then(() => {
  // Set app user model id for windows
  electronApp.setAppUserModelId('com.electron')

  // Default open or close DevTools by F12 in development
  // and ignore CommandOrControl + R in production.
  app.on('browser-window-created', (_, window) => {
    optimizer.watchWindowShortcuts(window)
  })

  createWindow()

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })

  console.log('\x1b[32mstart snapBaker...\x1b[0m \n')

  ipcMain.on('open-new-window', () => {
    createOtherWindow()
  })

  // call funcs
  funAppReady.forEach((funcName) => {
    funcName()
  })
})

// call funcs
funOut.forEach((funcName) => {
  funcName()
})

// Quit when all windows are closed
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
