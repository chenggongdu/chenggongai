<template>
  <a-layout-header style="background: #fff; padding: 0">
    <menu-unfold-outlined
      v-if="collapsed"
      class="trigger"
      @click="() => (collapsed = !collapsed)"
      :style="{
        marginLeft: '12px',
        fontSize: 'large',
      }"
    />
    <menu-fold-outlined
      v-else
      class="trigger"
      @click="() => (collapsed = !collapsed)"
      :style="{
        marginLeft: '12px',
        fontSize: 'large',
      }"
    />
  </a-layout-header>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import eventBus from '@libs/eventBus'

const collapsed = ref<boolean>(false)
watch(collapsed, (newCollapsed) => {
  eventBus.emit('collapsed', newCollapsed)
})
</script>

<style lang="less" scoped>
#components-layout-demo-custom-trigger {
  .trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;

    &:hover {
      color: #1890ff;
    }
  }

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
