<template>
    <div class="header-bar">
        <LeftEntry></LeftEntry>
        <div class="center-search-container">
            <CenterSearchBar></CenterSearchBar>
        </div>
        <RightEntry></RightEntry>
    </div>
</template>

<script setup lang="ts">
import LeftEntry from './LeftEntry.vue';
import CenterSearchBar from '../common/CenterSearchBar.vue';
import RightEntry from './RightEntry.vue';
</script>

<style scoped>
.header-bar{
    display: flex;
    align-items: center;
    padding: 0 24px;
}
.center-search-container{
    width:362px;
    height:38px;
    margin: 0 10px 0 10px;
}
</style>