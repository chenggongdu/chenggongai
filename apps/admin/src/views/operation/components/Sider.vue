<template>
  <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
    <div class="logo">
      <div class="logo-holder"></div>
      <span>{{ currentModuleName }}</span>
    </div>
    <a-menu v-model:selectedKeys="selectedKeys" theme="dark">
      <a-menu-item key="1">
        <user-outlined />
        <span>nav 1</span>
      </a-menu-item>
      <a-menu-item key="2">
        <video-camera-outlined />
        <span>nav 2</span>
      </a-menu-item>
      <a-menu-item key="3">
        <upload-outlined />
        <span>nav 3</span>
      </a-menu-item>
    </a-menu>
  </a-layout-sider>
</template>

<script setup lang="ts">
import { onBeforeUnmount, ref } from 'vue'
import eventBus from '@libs/eventBus'

const selectedKeys = ref<string[]>(['1'])
const collapsed = ref<boolean>(false)
const currentModuleName = ref<string | null>(null)

// 声明一个更新 collapsed 的函数
function updateCollapsed(newCollapsed: any) {
  collapsed.value = newCollapsed
}

// 声明一个更新currentModuleName的函数
function updateCurrentModuleName(newCurrentModuleName: any) {
  currentModuleName.value = newCurrentModuleName
}

// 启用监听
eventBus.on('collapsed', updateCollapsed)
eventBus.on('currentModuleName', updateCurrentModuleName)

// 在组件卸载之前移除监听
onBeforeUnmount(() => {
  eventBus.off('collapsed', updateCollapsed)
  eventBus.off('currentModuleName', updateCurrentModuleName)
})
</script>

<style lang="less" scoped>
.logo {
  height: 32px;
  margin: 16px;
  background: rgba(255, 255, 255, 0.3);
}
#components-layout-demo-custom-trigger {
  .logo {
    height: 32px;
    background: rgba(255, 255, 255, 0.3);
    margin: 16px;
  }
}

.site-layout {
  .site-layout-background {
    background: #fff;
  }
}
</style>
