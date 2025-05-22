import { createListenerMiddleware } from '@reduxjs/toolkit'

import { account, colorTheme } from '@/state/slice/settingSlice'

// import json data
import settingInfo from '@storage/setting.json'
import accountInfo from '@storage/account.json'

const listenerMiddleware = createListenerMiddleware()

// Listen to all actions from the 'setting' slice
listenerMiddleware.startListening({
  actionCreator: colorTheme,
  effect: async (_, listenerApi) => {
    // @ts-ignore (define in dts)
    const { setting } = await listenerApi.getState()

    // save setting data in setting file
    if (JSON.stringify(settingInfo) !== JSON.stringify(setting.colorTheme)) {
      window.homeScreen.WriteFile({ colorTheme: setting.colorTheme }, 'setting.json')
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
      window.homeScreen.WriteFile(setting.account, 'account.json')
    }
  }
})

export default listenerMiddleware
