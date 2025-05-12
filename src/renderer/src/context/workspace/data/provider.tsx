import { useState } from 'react'
import { DataContext } from './context'
import { props } from '@/type/workspace'

export const DataProvider = ({ children }: props): React.JSX.Element => {
  const [pageData, setPageData] = useState([
    { id: 0, name: 'home', pageNameInbut: { isOpen: 0, inbut: '', error: '' } },
    { id: 1, name: 'about us', pageNameInbut: { isOpen: 0, inbut: '', error: '' } },
    { id: 2, name: 'contact', pageNameInbut: { isOpen: 0, inbut: '', error: '' } }
  ])

  const [componentData, setComponentData] = useState([{ id: 0 }, { id: 1 }, { id: 2 }])

  return (
    <DataContext.Provider value={{ pageData, setPageData, componentData, setComponentData }}>
      {children}
    </DataContext.Provider>
  )
}
