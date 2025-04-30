import { useState, useEffect } from 'react'
import { SettingContext } from './context'

// import type
import {
  appDirectionsType,
  projectFromVisibilityType,
  activeSessionNameType,
  props
} from '@/type/home-screen'

export const SettingProvider = ({ children }: props): React.JSX.Element => {
  const [appDirections, setAppDirections] = useState<appDirectionsType>({
    home: 'active',
    projects: '',
    setting: ''
  })

  const [projectFromVisibility, setProjectFromVisibility] = useState<projectFromVisibilityType>({
    projects: 0,
    new: 0
  })

  const [activeSessionName, setActiveSessionName] = useState<activeSessionNameType>('')

  useEffect(() => {
    const handler = (): void => {
      setActiveSessionName('')
    }
    window.fromBackEnd.ipcRenderer.on('session-not-active', handler)
    return () => {
      window.fromBackEnd.ipcRenderer.removeListener('session-not-active', handler)
    }
  }, [])

  useEffect(() => {
    window.systemFile.WriteFile({ activeSession: activeSessionName }, 'setting.json')
  }, [activeSessionName])

  return (
    <SettingContext.Provider
      value={{
        appDirections,
        setAppDirections,
        projectFromVisibility,
        setProjectFromVisibility,
        activeSessionName,
        setActiveSessionName
      }}
    >
      {children}
    </SettingContext.Provider>
  )
}
