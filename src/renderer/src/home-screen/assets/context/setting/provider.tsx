import React, { useState } from 'react'
import { SettingContext } from './context'
import { appDirectionsType, projectFromVisibilityType, props } from '@/home-screen/types'

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

  return (
    <SettingContext.Provider
      value={{ appDirections, setAppDirections, projectFromVisibility, setProjectFromVisibility }}
    >
      {children}
    </SettingContext.Provider>
  )
}
