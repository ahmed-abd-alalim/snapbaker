import { createContext, useContext } from 'react'
import { dataType } from '@/type/workspace'

export const DataContext = createContext<dataType | null>(null)

export const useDataContext = (): dataType => {
  const context = useContext(DataContext)
  if (!context) throw new Error('Error')
  return context
}
