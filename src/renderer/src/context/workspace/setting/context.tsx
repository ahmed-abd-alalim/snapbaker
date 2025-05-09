import { createContext, useContext } from 'react'
import { settingType } from '@/type/workspace'

export const SettingContext = createContext<settingType | null>(null)

export const useSettingContext = (): settingType => {
  const context = useContext(SettingContext)
  if (!context) throw new Error('Error Setting Context')
  return context
}
