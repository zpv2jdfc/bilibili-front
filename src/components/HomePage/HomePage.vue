<template>
    <div class="bili-body">
      <LargeHeader></LargeHeader>
    </div>
    <router-view></router-view>
</template>
  
<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import LargeHeader from '../LargeHeader/LargeHeader.vue'
</script>

