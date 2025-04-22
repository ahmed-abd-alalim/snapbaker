import { useState } from 'react'
import { DataContext } from './context'
import { projectstDataArrayType, userInfoType, props } from '@/home-screen/types'

export const DataProvider = ({ children }: props): React.JSX.Element => {
  const [projectstData, setProjectstData] = useState<projectstDataArrayType>([])
  const [userInfo, setUserInfo] = useState<userInfoType>({
    fName: '',
    lName: '',
    img: ''
  })

  return (
    <DataContext.Provider value={{ projectstData, setProjectstData, userInfo, setUserInfo }}>
      {children}
    </DataContext.Provider>
  )
}
