<template>
    <el-input v-model="input" placeholder="Please input" >
      <template #append>
        <el-button :icon="Search"></el-button>
      </template>
    </el-input>
  </template>
  
  <script lang="ts" setup>
  import { ref } from 'vue'
  import { Search } from '@element-plus/icons-vue'
  const input = ref('')
  </script>
  