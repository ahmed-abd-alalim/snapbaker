import { useState } from 'react'
import { GlopalContext } from './context'
import { activeSessionNameType, props } from '@/types'

export const GlopalProvider = ({ children }: props): React.JSX.Element => {
  const [activeSessionName, setActiveSessionName] = useState<activeSessionNameType>(false)

  return (
    <GlopalContext.Provider value={{ activeSessionName, setActiveSessionName }}>
      {children}
    </GlopalContext.Provider>
  )
}
