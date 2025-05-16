import { createListenerMiddleware } from '@reduxjs/toolkit'
import { colorTheme } from './slice/settingSlice'

// import json data
import setting from '@storage/setting.json'

const listenerMiddleware = createListenerMiddleware()

// Listen to all actions from the 'setting' slice
listenerMiddleware.startListening({
  predicate: (action) => action.type.startsWith('setting/'),
  effect: async (_, listenerApi) => {
    const state = listenerApi.getState()
    // if (JSON.stringify(setting) !== JSON.stringify(state.setting)) {
    //   window.systemFile.WriteFile(state.setting, 'setting.json')
    // }
    console.log(state)
  }
})

// app color theme
listenerMiddleware.startListening({
  actionCreator: colorTheme,
  effect: async (_, listenerApi) => {
    const colorTheme = listenerApi.getState()
    const getActiveTheme = Object.keys(colorTheme.setting.colorTheme).filter(
      (item) => colorTheme.setting.colorTheme[item] === true
    )
    document.documentElement.setAttribute('app-theme-color', getActiveTheme[0])
  }
})

export default listenerMiddleware
