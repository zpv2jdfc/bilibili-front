<template>
    <div class="bili-mini-mask" ref="logBoard">
        <LogPage @close="close"></LogPage>
    </div>
</template>

<script setup lang="ts">
import LogPage from './LogPage.vue'
import { ref, onMounted } from 'vue'

const logBoard = ref()
function close(){
    logBoard.value.style.display="none"
}
</script>

<style scoped>
.bili-mini-mask{
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    font-size: 14px;
    background: rgba(0,0,0,.5);
    z-index: 10010;
    justify-content: center;
    align-items: center;
    display: flex;
}
</style>