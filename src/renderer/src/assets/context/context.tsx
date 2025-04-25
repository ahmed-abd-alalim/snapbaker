import { createContext, useContext } from 'react'
import { glopalType } from '@/types'

export const GlopalContext = createContext<glopalType | null>(null)

export const useGlopalContext = (): glopalType => {
  const context = useContext(GlopalContext)
  if (!context) throw new Error('Error')
  return context
}
