<template>
    <div class="bili-mini-mask" ref="logBoard">
        <LogPage></LogPage>
    </div>
</template>

<script setup lang="ts">
import LogPage from './LogPage.vue'
import { ref, onMounted, watch } from 'vue'
import {logConstant} from '../../api/store'

const logBoard = ref()
onMounted(() => {
    logBoard.value.style.display=logConstant.logDisplay
	})
watch(logConstant, (newS) => {
    logBoard.value.style.display = newS.logDisplay
})
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