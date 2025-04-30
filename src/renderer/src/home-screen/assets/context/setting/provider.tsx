import { useState, useEffect } from 'react'
import { SettingContext } from './context'

// import type
import {
  appDirectionsType,
  projectFromVisibilityType,
  activeSessionNameType,
  props,
  colorThemeType
} from '@/home-screen/types'

// import data
import setting from '@data/setting.json'

// import config
import { app } from '@/config'

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

  const availableThemes = Object.fromEntries(
    app.theme.availableThemes.map((themeName) => [themeName, false])
  )

  const [colorTheme, setColorTheme] = useState<colorThemeType>({
    ...availableThemes,
    [setting.colorTheme ? setting.colorTheme : app.theme.default]: true
  })

  const [activeSessionName, setActiveSessionName] = useState<activeSessionNameType>('')

  useEffect(() => {
    const getActiveTheme = Object.keys(colorTheme).filter((item) => colorTheme[item] === true)
    document.documentElement.setAttribute('app-theme-color', getActiveTheme[0])

    if ((setting.colorTheme ? setting.colorTheme : app.theme.default) !== getActiveTheme[0]) {
      window.systemFile.WriteFile({ colorTheme: getActiveTheme[0] }, 'setting.json')
    }
  }, [colorTheme])

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
        setActiveSessionName,
        colorTheme,
        setColorTheme
      }}
    >
      {children}
    </SettingContext.Provider>
  )
}
