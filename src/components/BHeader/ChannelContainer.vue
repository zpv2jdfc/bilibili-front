<template>
    <div class="common-layout">
      <el-container>
        <el-aside width="200px">
          <ChannelIcons></ChannelIcons>
        </el-aside>
        <ChannelLinks></ChannelLinks>
      </el-container>
    </div>
</template>
  
<script setup lang="ts">
import ChannelIcons from './ChannelIcons.vue'
import ChannelLinks from './ChannelLinks.vue'
</script>