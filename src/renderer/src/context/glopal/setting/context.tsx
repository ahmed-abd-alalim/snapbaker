import { createContext, useContext } from 'react'
import { settingType } from '@/type/glopal'

export const GlopalSettingContext = createContext<settingType | null>(null)

export const useGlopalSettingContext = (): settingType => {
  const context = useContext(GlopalSettingContext)
  if (!context) throw new Error('Error Setting Context')
  return context
}
