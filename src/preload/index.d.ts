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
    homeScreen: {
      WriteFile: (data: object, path: string) => void
      newApp: (data: object) => void
      deleteApp: (appName: string) => void
      updateApp: (newData: object, oldData: object) => void
      getAllProjectsInfo: () => Promise<object[]>
    }
  }
}

export {}
