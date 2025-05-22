import { createListenerMiddleware, isAnyOf } from '@reduxjs/toolkit'

import { account, projectsData, colorTheme } from '@/state/slice/settingSlice'

// import json data
import settingInfo from '@storage/setting.json'
import accountInfo from '@storage/account.json'
import projectsInfo from '@storage/projects.json'

const listenerMiddleware = createListenerMiddleware()

// Listen to all actions from the 'setting' slice
listenerMiddleware.startListening({
  matcher: isAnyOf(colorTheme),
  effect: async (_, listenerApi) => {
    // @ts-ignore (define in dts)
    const { setting } = await listenerApi.getState()
    const { account, projectsData, activeSessionName, ...otherSetting } = setting

    // save setting data in setting file
    if (JSON.stringify(settingInfo) !== JSON.stringify(otherSetting)) {
      window.systemFile.WriteFile(otherSetting, 'setting.json')
    }
  }
})

listenerMiddleware.startListening({
  actionCreator: account,
  effect: async (_, listenerApi) => {
    // @ts-ignore (define in dts)
    const { setting } = await listenerApi.getState()

    // save account data in account file
    if (JSON.stringify(accountInfo) !== JSON.stringify(setting.account)) {
      window.systemFile.WriteFile(setting.account, 'account.json')
    }
  }
})

listenerMiddleware.startListening({
  actionCreator: projectsData,
  effect: async (_, listenerApi) => {
    // @ts-ignore (define in dts)
    const { setting } = await listenerApi.getState()

    // save account data in account file
    if (JSON.stringify(projectsInfo) !== JSON.stringify(setting.projectsData)) {
      window.systemFile.WriteFile(setting.projectsData, 'projects.json')
    }
  }
})

export default listenerMiddleware
