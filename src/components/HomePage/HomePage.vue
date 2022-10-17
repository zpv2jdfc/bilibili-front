<template>
    <div class="common-layout">
      <el-container>
        <el-header>
          <NavMenu></NavMenu>
        </el-header>
        <el-main>
          <ChannelContainer></ChannelContainer>
        </el-main>
      </el-container>
    </div>
</template>
  
<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import NavMenu from '../common/NavMenu.vue'
import ChannelContainer from '../BHeader/ChannelContainer.vue'
</script>