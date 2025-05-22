import { contextBridge, ipcRenderer } from 'electron'

// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.

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

    contextBridge.exposeInMainWorld('userImg', {
      getPath: () => ipcRenderer.invoke('get-user-image-path')
    })

    contextBridge.exposeInMainWorld('homeScreen', {
      WriteFile: (data: object, path: string) => ipcRenderer.send('save-file', data, path),
      newApp: (data: object) => ipcRenderer.send('new-app', data),
      deleteApp: (appName: string) => ipcRenderer.send('delete-app', appName),
      updateApp: (newData: object, oldData: object) =>
        ipcRenderer.send('update-app', newData, oldData),
      getAllProjectsInfo: () => ipcRenderer.invoke('get-all-projects-info')
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
  window.userImg = {
    getPath: () => ipcRenderer.invoke('get-user-image-path')
  }

  // @ts-ignore (define in dts)
  window.homeScreen = {
    WriteFile: (data: object, path: string) => ipcRenderer.send('save-file', data, path),
    newApp: (data: object) => ipcRenderer.send('new-app', data),
    deleteApp: (appName: string) => ipcRenderer.send('delete-app', appName),
    updateApp: (newData: object, oldData: object) =>
      ipcRenderer.send('update-app', newData, oldData),
    getAllProjectsInfo: () => ipcRenderer.invoke('get-all-projects-info')
  }
}
