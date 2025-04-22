import { useEffect, useState } from 'react'
import { DataContext } from './context'
import { projectstDataArrayType, userInfoType, props } from '@/home-screen/types'

// import json data
import accountInfo from '@data/account.json'
import projectsDataInfo from '@data/projectsData.json'

export const DataProvider = ({ children }: props): React.JSX.Element => {
  const [projectsData, setProjectsData] = useState<projectstDataArrayType>(projectsDataInfo)
  const [userInfo, setUserInfo] = useState<userInfoType>({
    fName: accountInfo.fName,
    lName: accountInfo.lName,
    img: accountInfo.img
  })

  useEffect(() => {
    if (JSON.stringify(userInfo) === JSON.stringify(accountInfo)) {
      return
    } else {
      window.systemFile.WriteFile(userInfo, 'src/data/account.json')
    }
  }, [userInfo])

  useEffect(() => {
    if (JSON.stringify(projectsDataInfo) === JSON.stringify(projectsData)) {
      return
    } else {
      window.systemFile.WriteFile(projectsData, 'src/data/projectsData.json')
    }
  }, [projectsData])

  return (
    <DataContext.Provider value={{ projectsData, setProjectsData, userInfo, setUserInfo }}>
      {children}
    </DataContext.Provider>
  )
}
