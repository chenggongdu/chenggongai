import path from 'path'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import VueDevTools from 'vite-plugin-vue-devtools'
import UnoCSS from 'unocss/vite'
import components from 'unplugin-vue-components/vite'
const resolve = (dir: string): string => path.resolve(__dirname, dir)
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    VueDevTools(),
    UnoCSS(),
    /**
     * 自动导入组件，不用每次都 import
     * @see https://github.com/antfu/unplugin-vue-components#configuration
     */
    components({
      dirs: ['src/components', 'src/views/*/components'],
      directoryAsNamespace: false,
      collapseSamePrefixes: false,
      globalNamespaces: [],
      extensions: ['vue', 'ts', 'tsx'],
      deep: true,
      dts: 'src/types/declaration-files/components.d.ts'
    })
  ],
  resolve: {
    alias: {
      '@': resolve('src'),
      '@libs': resolve('src/libs'),
      '#': resolve('types'),
      '@hooks': resolve('src/hooks'),
      '@cp': resolve('src/components'),
      '@views': resolve('src/views')
    }
  }
})
