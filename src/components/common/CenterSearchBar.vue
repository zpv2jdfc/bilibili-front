<template>
    <div class="center-search-bar">
        <form style="border-radius: 8px;">
            <div class="nav-search-content">
                <input class="nav-search-input" type="text" autocomplete="off" accesskey="s" maxlength="100" x-webkit-speech="" x-webkit-grammar="builtin:translate" value="" placeholder="电影解说">
            </div>
            <div class="nav-search-btn">
                <SearchBtn></SearchBtn>
            </div>
        </form>
    </div>
</template>

<script setup lang="ts">
import SearchBtn from '../icons/SearchBtn.vue';
</script>

<style scoped>
.center-search-bar{
    width: 362px;
    height: 40px;
}
</style>