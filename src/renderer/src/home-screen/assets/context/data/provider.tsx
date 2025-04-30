import { useEffect, useState } from 'react'
import { DataContext } from './context'
import { projectstDataArrayType, userInfoType, props } from '@/type/home-screen'

// import json data
import accountInfo from '@data/account.json'

export const DataProvider = ({ children }: props): React.JSX.Element => {
  const [projectsData, setProjectsData] = useState<projectstDataArrayType>([])
  const [userInfo, setUserInfo] = useState<userInfoType>({
    fName: accountInfo.fName,
    lName: accountInfo.lName,
    img: accountInfo.img
  })

  useEffect(() => {
    if (JSON.stringify(userInfo) === JSON.stringify(accountInfo)) {
      return
    } else {
      window.systemFile.WriteFile(userInfo, 'account.json')
    }
  }, [userInfo])

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      // Send IPC message to Electron backend
      setProjectsData(await window.systemFile.getAllProjectsInfo())
    }

    fetchData()
  }, [])

  return (
    <DataContext.Provider value={{ projectsData, setProjectsData, userInfo, setUserInfo }}>
      {children}
    </DataContext.Provider>
  )
}
