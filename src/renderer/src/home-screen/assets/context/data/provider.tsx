import { useEffect, useState } from 'react'
import { DataContext } from './context'
import { projectstDataArrayType, userInfoType, props } from '@/home-screen/types'

// import json data
import setting from '@data/setting.json'

export const DataProvider = ({ children }: props): React.JSX.Element => {
  const [jsonSetting, setJsonSetting] = useState(setting)
  const [projectstData, setProjectstData] = useState<projectstDataArrayType>([])
  const [userInfo, setUserInfo] = useState<userInfoType>({
    fName: jsonSetting.account.fName,
    lName: jsonSetting.account.lName,
    img: jsonSetting.account.img
  })

  useEffect(() => {
    if (JSON.stringify(userInfo) === JSON.stringify(jsonSetting.account)) {
      return
    } else {
      setJsonSetting((settingPveData) => ({
        ...settingPveData,
        account: userInfo
      }))
    }
  }, [userInfo, jsonSetting.account])

  return (
    <DataContext.Provider value={{ projectstData, setProjectstData, userInfo, setUserInfo }}>
      {children}
    </DataContext.Provider>
  )
}
