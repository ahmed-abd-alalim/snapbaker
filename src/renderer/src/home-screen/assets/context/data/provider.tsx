import { useEffect, useState } from 'react'
import { DataContext } from './context'
import { projectstDataArrayType, userInfoType, props } from '@/home-screen/types'

// import json data
import accountInfo from '@data/account.json'

export const DataProvider = ({ children }: props): React.JSX.Element => {
  const [projectstData, setProjectstData] = useState<projectstDataArrayType>([])
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

  return (
    <DataContext.Provider value={{ projectstData, setProjectstData, userInfo, setUserInfo }}>
      {children}
    </DataContext.Provider>
  )
}
