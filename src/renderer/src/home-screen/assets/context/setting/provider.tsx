import { useState } from 'react'
import { SettingContext } from './context'
import {
  appDirectionsType,
  projectFromVisibilityType,
  props,
  activeSessionNameType
} from '@/home-screen/types'

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

  const [activeSessionName, setActiveSessionName] = useState<activeSessionNameType>('pop')

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
