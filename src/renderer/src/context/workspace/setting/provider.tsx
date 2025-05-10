import { useState } from 'react'
import { SettingContext } from './context'

// import type
import { appDirectionsType, designPanelCursorType, props } from '@/type/workspace'

export const SettingProvider = ({ children }: props): React.JSX.Element => {
  const [appDirections, setAppDirections] = useState<appDirectionsType>({
    designPanel: 'active',
    routingPanel: ''
  })

  const [designPanelCursor, setdesignPanelCursor] = useState<designPanelCursorType>('default')

  return (
    <SettingContext.Provider
      value={{
        appDirections,
        setAppDirections,
        designPanelCursor,
        setdesignPanelCursor
      }}
    >
      {children}
    </SettingContext.Provider>
  )
}
