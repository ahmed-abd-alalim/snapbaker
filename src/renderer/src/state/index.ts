import { configureStore } from '@reduxjs/toolkit'
import { createStateSyncMiddleware, initMessageListener } from 'redux-state-sync'
import rootReducer from './slice'
import listenerMiddleware from './listenerMiddleware'

const stateSyncMiddleware = createStateSyncMiddleware()

export const store = configureStore({
  reducer: rootReducer,
  // @ts-ignore (define in dts)
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(stateSyncMiddleware).prepend(listenerMiddleware.middleware)
})

initMessageListener(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
