<template>
  <div>
    <el-space :size="10" direction="vertical">
      <el-row >
        <el-button   @click="openchannel('anime')">番剧</el-button>
        <el-button   @click="openchannel('anime')">番剧</el-button>
        <el-button   @click="openchannel('anime')">番剧</el-button>
        <el-button   @click="openchannel('anime')">番剧</el-button>
        <el-button   @click="openchannel('anime')">番剧</el-button>
        <el-button   @click="openchannel('anime')">番剧</el-button>
        <el-button   @click="openchannel('anime')">番剧</el-button>
        <el-button   @click="openchannel('anime')">番剧</el-button>
        <el-button   @click="openchannel('anime')">番剧</el-button>
        <el-button   @click="openchannel('anime')">番剧</el-button>
        <el-button   @click="openchannel('anime')">番剧</el-button>
      </el-row>
      <el-row >
        <el-button   @click="openchannel('anime')">番剧</el-button>
        <el-button   @click="openchannel('anime')">番剧</el-button>
        <el-button   @click="openchannel('anime')">番剧</el-button>
        <el-button   @click="openchannel('anime')">番剧</el-button>
        <el-button   @click="openchannel('anime')">番剧</el-button>
        <el-button   @click="openchannel('anime')">番剧</el-button>
        <el-button   @click="openchannel('anime')">番剧</el-button>
        <el-button   @click="openchannel('anime')">番剧</el-button>
        <el-button   @click="openchannel('anime')">番剧</el-button>
        <el-button   @click="openchannel('anime')">番剧</el-button>
        <el-button   @click="openchannel('anime')">番剧</el-button>
      </el-row>
    </el-space>
  </div>
</template>
  
<script setup lang="ts">
  function openchannel(href: string){
    window.open(href, "_blank");
  }
</script>

<style scoped>

</style>