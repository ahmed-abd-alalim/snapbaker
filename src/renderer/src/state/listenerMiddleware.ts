import { createListenerMiddleware } from '@reduxjs/toolkit'

// import json data
import setting from '@storage/setting.json'

const listenerMiddleware = createListenerMiddleware()

// Listen to all actions from the 'setting' slice
listenerMiddleware.startListening({
  predicate: (action) => action.type.startsWith('setting/'),
  effect: async (_, listenerApi) => {
    const state = listenerApi.getState()
    if (JSON.stringify(setting) !== JSON.stringify(state.setting)) {
      window.systemFile.WriteFile(state.setting, 'setting.json')
    }
  }
})

export default listenerMiddleware
