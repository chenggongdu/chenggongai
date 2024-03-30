import type { RouteRecordRaw } from 'vue-router'

/**
 * 路由配置
 * @description 所有路由都在这里集中管理
 */
const routes: RouteRecordRaw[] = [
  /**
   * 工作台
   */
  {
    path: '/',
    name: 'operation',
    component: () => import('@/views/operation/index.vue'),
    meta: {
      title: '工作台'
    }
  }
]

export default routes
