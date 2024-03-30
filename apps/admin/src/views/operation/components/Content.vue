<template>
  <a-layout-content
    :style="{
      margin: '12px 12px',
      padding: '24px',
      background: '#fff',
      minHeight: '280px',
      height: '90vh'
    }"
  >
    工作台
    <ul class="ul-apps">
      <li v-for="(item, index) in apps" :title="item.menuName" :key="index">
        <Icon :name="item.menuName" :type="item.menuType" />
        <br />
        <span class="li_text">{{ item.menuName }}</span>
      </li>
    </ul>
  </a-layout-content>
</template>

<script setup lang="ts">
import { ref } from 'vue'
interface Menu {
  menuName: string
  menuType: string
}
const apps = ref<Menu[]>([
  {
    menuName: '三明治',
    menuType: 'svg'
  }
])
</script>

<style lang="less" scoped>  
ul {
  list-style: none;
  width: calc(100% - 60px);
  padding: 0;
  display: flex;
  flex-wrap: wrap;
}
li {
  width: 12.5%; /* 每行显示8个，所以宽度为 100% / 8 = 12.5% */
  box-sizing: border-box;
  text-align: center;
  margin: 5px 0;
}
.ul-apps {
  font-size: 16px;

  li {
    position: relative;
    float: left;
    padding: 10px 0;
    text-align: center;
    margin-top: 8px;
    cursor: pointer;
    box-sizing: border-box;

    &:hover {
      box-shadow:
        0 0 8px 0 rgba(232, 237, 250, 0.9),
        0 2px 4px 0 rgba(232, 237, 250, 0.8);
      background-color: #fafafa;
      .favourite {
        display: block;
      }
    }

    i {
      display: block;
    }

    .li_text {
      display: block;
      margin-top: 10px;
      overflow: hidden;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .favourite {
      display: none;
      position: absolute;
      right: 0;
      top: 0;
      width: 30px;
      height: 30px;
      cursor: default;
    }

    .add-to-favourite {
      background: url('./../assets/fav.png') no-repeat center / auto 16px;
    }

    .remove-from-favourite {
      background: url('./../assets/fav1.png') no-repeat center / auto 16px;
    }
  }
}
</style>
