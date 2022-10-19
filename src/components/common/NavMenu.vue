<template>
  <LeftEntry></LeftEntry>

</template>
  
  <script lang="ts" setup>
  import { ref } from 'vue'
  import SearchBar from './SearchBar.vue'
  import BiliIcon from '../icons/BiliIcon.vue'
  import MenuItem from './MenuItem.vue'
  import LeftEntry from './LeftEntry.vue'
  </script>
  
<style scoped>
.block1 {
  float: left;
  width: 74px;
  margin: 0px 0px 0px 0px; 
}
.block1 svg{
  fill: #09C7F7;
}
.block2 {
  float: left;
  width: 30%;
  margin: 0px 0px 0px 0px; 
}
.block3 {
  float: left;
  width: 20%;
  margin: 0px 0px 0px 0px; 
}
.block4 {
  float: left;
  width: 30%;
  margin: 0px 0px 0px 0px; 
}
.icon{
  margin-top: 6px;
}
</style>