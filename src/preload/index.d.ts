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
    homeScreen: {
      getPath: () => Promise<string | null>
      WriteFile: (data: object, path: string) => void
      newApp: (data: object) => void
      deleteApp: (appName: string) => void
      updateApp: (newData: object, oldData: object) => void
      getAllProjectsInfo: () => Promise<object[]>
    }
  }
}

export {}
