import { useState, useEffect } from 'react'
import { SettingContext } from './context'
import {
  appDirectionsType,
  projectFromVisibilityType,
  activeSessionNameType,
  props,
  colorThemeType
} from '@/home-screen/types'

import setting from '@data/setting.json'

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
    [setting.colorTheme]: true
  })

  const [activeSessionName, setActiveSessionName] = useState<activeSessionNameType>('')

  useEffect(() => {
    const getActiveTheme = Object.keys(colorTheme).filter((item) => colorTheme[item] === true)
    if (setting.colorTheme !== getActiveTheme[0]) {
      window.systemFile.WriteFile({ colorTheme: getActiveTheme[0] }, 'setting.json')
    }
  }, [colorTheme])

  useEffect(() => {
    window.fromBackEnd.notActive(() => {
      setActiveSessionName(activeSessionName !== '' ? '' : activeSessionName)
    })
  }, [activeSessionName])

  useEffect(() => {
    if (setting.activeSession !== activeSessionName) {
      window.systemFile.WriteFile({ activeSession: activeSessionName }, 'setting.json')
    }
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
