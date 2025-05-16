import { createListenerMiddleware, isAnyOf } from '@reduxjs/toolkit'

import { account, projectsData, activeSessionName, colorTheme } from '@/state/slice/settingSlice'
// import json data
import setting from '@storage/setting.json'
import accountInfo from '@storage/account.json'
import projects from '@storage/projects.json'

const listenerMiddleware = createListenerMiddleware()

// Listen to all actions from the 'setting' slice
listenerMiddleware.startListening({
  matcher: isAnyOf(activeSessionName, colorTheme),
  effect: async (_, listenerApi) => {
    const state = await listenerApi.getState()
    const { account, projectsData, ...newState } = state.setting
    if (JSON.stringify(setting) !== JSON.stringify(newState)) {
      window.systemFile.WriteFile(newState, 'setting.json')
    }
  }
})

listenerMiddleware.startListening({
  actionCreator: account,
  effect: async (_, listenerApi) => {
    const state = await listenerApi.getState()
    if (JSON.stringify(accountInfo) !== JSON.stringify(state.setting.account)) {
      window.systemFile.WriteFile(state.setting.account, 'account.json')
    }
  }
})

listenerMiddleware.startListening({
  actionCreator: projectsData,
  effect: async (_, listenerApi) => {
    const state = await listenerApi.getState()
    if (JSON.stringify(projects) !== JSON.stringify(state.setting.projectsData)) {
      window.systemFile.WriteFile(state.setting.projectsData, 'projects.json')
    }
  }
})

export default listenerMiddleware
