import { createListenerMiddleware } from '@reduxjs/toolkit'

import { account, colorTheme } from '@/state/slice/settingSlice'
import {
  messageAdd,
  messageUpdate,
  settingIsRead,
  settingIsOpen
} from '@/state/slice/workspaceSlice'
// import { pageData, componentData } from '@/state/slice/projectSlice'

// import json data
import settingInfo from '@storage/setting.json'
import accountInfo from '@storage/account.json'

const listenerMiddleware = createListenerMiddleware()

// ############
// Listen to all actions from the 'setting' slice
// ############
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

// ############
// Listen to all actions from the 'workspace' slice
// ############
listenerMiddleware.startListening({
  actionCreator: messageAdd,
  effect: async (_, listenerApi) => {
    // @ts-ignore (define in dts)
    const { workspace } = await listenerApi.getState()

    if (!workspace.notification.settings.isOpen && workspace.notification.settings.isRead) {
      listenerApi.dispatch(settingIsRead(false))
    }
  }
})

listenerMiddleware.startListening({
  actionCreator: settingIsOpen,
  effect: async (_, listenerApi) => {
    // @ts-ignore (define in dts)
    const { workspace } = await listenerApi.getState()

    if (!workspace.notification.settings.isOpen && workspace.notification.settings.isRead) {
      const updateMessages = workspace.notification.messages.map((message) => ({
        ...message,
        isRead: true
      }))
      listenerApi.dispatch(messageUpdate(updateMessages))
    }
  }
})

// ############
// Listen to all actions from the 'project' slice
// ############
// let fcountPageData = 0
// let fcountcomponentData = 0

// listenerMiddleware.startListening({
//   actionCreator: pageData,
//   effect: async (_, listenerApi) => {
//     // @ts-ignore (define in dts)
//     const { project } = await listenerApi.getState()

//     // save account data in account file
//     if (fcountPageData) {
//       window.workSpace.UpdateFile(project.pageData, `${project.appInfo.siteName}/pages.json`)
//     } else {
//       fcountPageData++
//     }
//   }
// })

// listenerMiddleware.startListening({
//   actionCreator: componentData,
//   effect: async (_, listenerApi) => {
//     // @ts-ignore (define in dts)
//     const { project } = await listenerApi.getState()

//     // save account data in account file
//     if (fcountcomponentData) {
//       window.workSpace.UpdateFile(
//         project.componentData,
//         `${project.appInfo.siteName}/components.json`
//       )
//     } else {
//       fcountcomponentData++
//     }
//   }
// })

export default listenerMiddleware
