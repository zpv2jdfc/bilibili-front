<template>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item index="1">
        <BiliIcon></BiliIcon>
      </el-menu-item>
      <el-sub-menu index="2">
        <template #title>首页</template>
        <el-menu-item index="2-1">番剧</el-menu-item>
        <el-menu-item index="2-2">电影</el-menu-item>
        <el-menu-item index="2-3">国创</el-menu-item>
      </el-sub-menu>
      <el-menu-item index="3">番剧</el-menu-item>
      <el-menu-item index="4">直播</el-menu-item>
      <SearchBar></SearchBar>
    </el-menu>

</template>
  
  <script lang="ts" setup>
  import { ref } from 'vue'
  import SearchBar from './SearchBar.vue'
  import BiliIcon from '../icons/BiliIcon.vue'
  
  const activeIndex = ref('1')
  const activeIndex2 = ref('1')
  const handleSelect = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
  }
  </script>
  
