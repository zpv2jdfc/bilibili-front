<template>
    <div class="bili-body">
      <LargeHeader></LargeHeader>
    </div>
    <log></log>
    <router-view></router-view>
</template>
  
<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import LargeHeader from '../LargeHeader/LargeHeader.vue'
import log from '../log/log.vue'
</script>

