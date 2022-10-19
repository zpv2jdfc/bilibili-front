<template>
    <div>
      <el-container>
        <el-aside width="250px">
          <ChannelIcons></ChannelIcons>
        </el-aside>
        <el-main>
          <ChannelLinks></ChannelLinks>
        </el-main>
        <el-aside>
          <ChannelItems></ChannelItems>
        </el-aside>
      </el-container>
    </div>
</template>
  
<script setup lang="ts">
import ChannelIcons from './ChannelIcons.vue'
import ChannelLinks from './ChannelLinks.vue'
import ChannelItems from './ChannelItems.vue'
</script>

<style>

</style>