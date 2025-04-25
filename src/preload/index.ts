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

    contextBridge.exposeInMainWorld('systemFile', {
      WriteFile: (data: object, path: string) => ipcRenderer.send('save-file', data, path)
    })

    contextBridge.exposeInMainWorld('fromBackEnd', {
      notActive: (callback: (event: Electron.IpcRendererEvent, data: boolean) => void) => {
        ipcRenderer.on('session-not-active', callback)
      }
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
  window.systemFile = {
    WriteFile: (data: object, path: string) => ipcRenderer.send('save-file', data, path)
  }

  // @ts-ignore (define in dts)
  window.fromBackEnd = {
    notActive: (callback: (event: Electron.IpcRendererEvent, data: boolean) => void) => {
      ipcRenderer.on('session-not-active', callback)
    }
  }
}
