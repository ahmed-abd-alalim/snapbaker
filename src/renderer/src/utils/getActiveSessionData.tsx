// import { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'

// // import stat
// import { appInfo, pageData, componentData } from '@/state/slice/projectSlice'
// import { RootState } from '@/state/index'

const GetActiveSessionData = (): null => {
  // const dispatch = useDispatch()
  // const activeSessionName = useSelector((state: RootState) => state.setting.activeSessionName)

  // useEffect(() => {
  //   const GetData = async (): Promise<void> => {
  //     const activeSessionData = await window.workSpace.getActiveSessionData(activeSessionName)
  //     if (activeSessionData.pages === '') {
  //       GetData()
  //     } else {
  //       setTimeout(() => {
  //         dispatch(appInfo(activeSessionData.app))
  //         dispatch(pageData(activeSessionData.pages))
  //         dispatch(componentData(activeSessionData.components))
  //       }, 500)
  //     }
  //   }
  //   if (activeSessionName !== '') {
  //     GetData()
  //   }
  // }, [activeSessionName])

  return null
}

export default GetActiveSessionData
