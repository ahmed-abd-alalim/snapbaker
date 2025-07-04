import { resolve } from 'path'
import { defineConfig, externalizeDepsPlugin } from 'electron-vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin()]
  },
  preload: {
    plugins: [externalizeDepsPlugin()]
  },
  renderer: {
    server: {
      watch: {
        ignored: ['**/src/storage/*']
      }
    },
    resolve: {
      alias: {
        '@': resolve('src/renderer/src'),
        '@storage': resolve('src/storage')
      }
    },
    plugins: [react()]
  }
})
