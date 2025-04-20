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
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src/renderer/src'),
        '@home-screen': resolve(__dirname, 'src/renderer/src/home-screen'),
        '@workspace': resolve(__dirname, 'src/renderer/src/workspace'),
        '@config': resolve(__dirname, 'src/renderer/src/config')
      }
    },
    plugins: [react()]
  }
})
