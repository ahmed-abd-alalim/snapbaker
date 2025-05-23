import { contextBridge, ipcRenderer } from 'electron'

if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('newWindow', {
      openNewWindow: () => ipcRenderer.send('open-new-window')
    })
    contextBridge.exposeInMainWorld('controlar', {
      closeWindow: () => ipcRenderer.send('close-window'),
      minimizeWindow: () => ipcRenderer.send('minimize-window'),
      toggleMaximizeWindow: () => ipcRenderer.send('toggle-maximize-window')
    })
    contextBridge.exposeInMainWorld('homeScreen', {
      getUserImg: () => ipcRenderer.invoke('get-user-image-path'),
      WriteFile: (data: object, path: string) => ipcRenderer.send('save-file', data, path),
      newApp: (data: object) => ipcRenderer.send('new-app', data),
      deleteApp: (appName: string) => ipcRenderer.send('delete-app', appName),
      updateApp: (newData: object, oldData: object) =>
        ipcRenderer.send('update-app', newData, oldData),
      getAllProjectsInfo: () => ipcRenderer.invoke('get-all-projects-info')
    })
    contextBridge.exposeInMainWorld('workSpace', {
      getActiveSessionData: (fileName: string) =>
        ipcRenderer.invoke('get-active-session-data', fileName),
      UpdateFile: (data: object, path: string) => ipcRenderer.send('update-file', data, path)
    })
  } catch (error) {
    console.error(error)
  }
} else {
  // @ts-ignore (define in dts)
  window.newWindow = {
    openNewWindow: () => ipcRenderer.send('open-new-window')
  }

  // @ts-ignore (define in dts)
  window.controlar = {
    closeWindow: () => ipcRenderer.send('close-window'),
    minimizeWindow: () => ipcRenderer.send('minimize-window'),
    toggleMaximizeWindow: () => ipcRenderer.send('toggle-maximize-window')
  }

  // @ts-ignore (define in dts)
  window.homeScreen = {
    getUserImg: () => ipcRenderer.invoke('get-user-image-path'),
    WriteFile: (data: object, path: string) => ipcRenderer.send('save-file', data, path),
    newApp: (data: object) => ipcRenderer.send('new-app', data),
    deleteApp: (appName: string) => ipcRenderer.send('delete-app', appName),
    updateApp: (newData: object, oldData: object) =>
      ipcRenderer.send('update-app', newData, oldData),
    getAllProjectsInfo: () => ipcRenderer.invoke('get-all-projects-info')
  }

  // @ts-ignore (define in dts)
  window.workSpace = {
    getActiveSessionData: (fileName: string) =>
      ipcRenderer.invoke('get-active-session-data', fileName),
    UpdateFile: (data: object, path: string) => ipcRenderer.send('update-file', data, path)
  }
}
