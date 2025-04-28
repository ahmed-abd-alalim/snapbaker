declare global {
  interface Window {
    newWindow: {
      openNewWindow: () => void
    }
    controlar: {
      closeWindow: () => void
      minimizeWindow: () => void
      toggleMaximizeWindow: () => void
    }
    userImg: {
      getPath: () => Promise<string | null>
    }
    systemFile: {
      WriteFile: (data: object, path: string) => void
      newApp: (data: object) => void
      deleteApp: (appName: string) => void
      updateApp: (newData: object, oldData: object) => void
      getAllProjectsInfo: () => Promise<object[]>
    }
    fromBackEnd: {
      notActive: (callback: (event: Electron.IpcRendererEvent) => void) => void
    }
  }
}

export {}
