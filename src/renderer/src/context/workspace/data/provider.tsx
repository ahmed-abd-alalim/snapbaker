import { useState, useEffect } from 'react'
import { DataContext } from './context'
import { props, pageDataType } from '@/type/workspace'

// import json seting
import accountInfo from '@data/setting.json'

export const DataProvider = ({ children }: props): React.JSX.Element => {
  const [pageData, setPageData] = useState<pageDataType[]>([])
  const [componentData, setComponentData] = useState([{ id: 0 }, { id: 1 }, { id: 2 }])

  // const allpageData = async (): Promise<pageDataType[]> => {
  //   const module = await import(`@data/projects/${accountInfo.activeSession}/pages.json`)
  //   return module.default
  // }

  // allpageData().then((data): void => setPageData(data))

  // useEffect(() => {
  //   allpageData().then((data) => {
  //     if (JSON.stringify(data) === JSON.stringify(pageData)) {
  //       return
  //     }
  //     window.workSpaceActions.WriteFile(
  //       pageData,
  //       `src/data/projects/${accountInfo.activeSession}/pages.json`
  //     )
  //   })
  // }, [pageData])

  return (
    <DataContext.Provider value={{ pageData, setPageData, componentData, setComponentData }}>
      {children}
    </DataContext.Provider>
  )
}
