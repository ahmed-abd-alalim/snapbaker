import { useState } from 'react'
import { SettingContext } from './context'

// import type
import { appDirectionsType, props } from '@/type/workspace'

export const SettingProvider = ({ children }: props): React.JSX.Element => {
  const [appDirections, setAppDirections] = useState<appDirectionsType>({
    designPanel: 'active',
    routingPanel: ''
  })

  return (
    <SettingContext.Provider
      value={{
        appDirections,
        setAppDirections
      }}
    >
      {children}
    </SettingContext.Provider>
  )
}
