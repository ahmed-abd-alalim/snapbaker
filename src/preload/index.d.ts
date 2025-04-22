declare global {
  interface Window {
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
    }
  }
}

export {}
