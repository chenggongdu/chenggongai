import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/reset.css'
import 'virtual:uno.css'
import * as Icons from '@ant-design/icons-vue'

// 全局样式
import '@/styles/var.less'
import '@/styles/mixin.less'
import '@/styles/global.less'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Antd)

app.mount('#app')

// 注册所有的 antd 图标
const icons: any = Icons
for (const i in icons) {
  app.component(i, icons[i])
}
