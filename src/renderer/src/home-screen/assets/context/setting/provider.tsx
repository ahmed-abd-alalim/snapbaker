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

  const colorThemeRaw = {
    dark: false,
    white: false,
    blue: false
  }

  const [colorTheme, setColorTheme] = useState<colorThemeType>({
    ...colorThemeRaw,
    [setting.colorTheme ? setting.colorTheme : app.theme.default]: true
  })

  const [activeSessionName, setActiveSessionName] = useState<activeSessionNameType>('')

  useEffect(() => {
    const getActiveTheme = Object.keys(colorTheme).filter((item) => colorTheme[item] === true)
    if ((setting.colorTheme ? setting.colorTheme : app.theme.default) !== getActiveTheme[0]) {
      window.systemFile.WriteFile({ colorTheme: getActiveTheme[0] }, 'setting.json')
    }
  }, [colorTheme])

  useEffect(() => {
    window.fromBackEnd.notActive(() => {
      setActiveSessionName('')
    })
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
