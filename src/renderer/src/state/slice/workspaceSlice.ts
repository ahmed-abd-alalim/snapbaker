import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

// import type
import {
  workspaceDirectionsType,
  designPanelCursorType,
  notificationType,
  notificationMessageType
} from '@/type'

// setting state type
export interface SettingState {
  directions: workspaceDirectionsType
  designPanelCursor: designPanelCursorType
  notification: notificationType
}

// setting state
const initialState: SettingState = {
  directions: {
    designPanel: 'active',
    routingPanel: ''
  },
  designPanelCursor: 'default',
  notification: {
    settings: {
      isOpen: false,
      isRead: true
    },
    messages: []
  }
}

export const workspaceSlice = createSlice({
  name: 'workspace',
  initialState,
  reducers: {
    directions: (state, action: PayloadAction<workspaceDirectionsType>): void => {
      state.directions = action.payload
    },
    designPanelCursor: (state, action: PayloadAction<designPanelCursorType>): void => {
      state.designPanelCursor = action.payload
    },
    // notification fun
    messageAdd: (state, action: PayloadAction<notificationMessageType>): void => {
      state.notification.messages.push(action.payload)
    },
    messageUpdate: (state, action: PayloadAction<notificationMessageType[]>): void => {
      state.notification.messages = action.payload
    },
    settingIsOpen: (state, action: PayloadAction<boolean>): void => {
      state.notification.settings.isOpen = action.payload
    },
    settingIsRead: (state, action: PayloadAction<boolean>): void => {
      state.notification.settings.isRead = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const {
  directions,
  designPanelCursor,
  messageAdd,
  messageUpdate,
  settingIsOpen,
  settingIsRead
} = workspaceSlice.actions

export default workspaceSlice.reducer
