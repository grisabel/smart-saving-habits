import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

import federation from "@originjs/vite-plugin-federation";
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    cssInjectedByJsPlugin(),
    vueJsx(),
    federation({
      name: "remoteHabitsMfe",
      filename: "remoteHabitsMfe.js",
      exposes: {
        "./HabitsMfe": {
          import: "./src/HabitsMfe",
          dontAppendStylesToHead: true
        },
      },
    }),
  ],
  build:{
    minify:false,
    cssCodeSplit: true,
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
