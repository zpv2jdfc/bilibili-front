<template>
  <div>
    <el-row>
      <el-col>
        <div class="grid-content">
          <el-link :underline="false">番剧</el-link>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
  
<script setup lang="ts">
const buttons = [
  { type: '', text: 'plain' },
  { type: '', text: 'primary' },
  { type: '', text: 'success' },
  { type: '', text: 'info' },
  { type: '', text: 'warning' },
  { type: '', text: 'danger' },
  { type: '', text: 'danger' },
  { type: '', text: 'danger' },
  { type: '', text: 'danger' },

] as const
</script>

<style scoped>
.el-col {
  border-radius: 4px;
}
.grid-content {
  width: 70px;
  height: 24px;
  text-align: center;
  border-radius: 7px;
  border: 1px solid var(--el-border-color);
  background-color: #F5F7FA;
  letter-spacing: 2px;
  font-weight: 400;
}

</style>