import { fileURLToPath, URL } from 'node:url'
import path from 'path'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import VueDevTools from 'vite-plugin-vue-devtools'
import UnoCSS from 'unocss/vite'
const resolve = (dir: string): string => path.resolve(__dirname, dir)
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx(), VueDevTools(), UnoCSS()],
  resolve: {
    alias: {
      '@': resolve('src'),
      '#': resolve('types'),
      '@hooks': resolve('src/hooks'),
      '@cp': resolve('src/components'),
      '@views': resolve('src/views')
    }
  }
})
