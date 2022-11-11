<template>
    <div class="center-search-bar">
        <form class="nav-searchform">
            <div class="nav-search-content">
                <!-- <input class="nav-search-input" type="text" autocomplete="off" accesskey="s" maxlength="100" x-webkit-speech="" x-webkit-grammar="builtin:translate" value=""> -->
                <input class="nav-search-input" type="text" v-model="searchContent">
            </div>
            <div class="nav-search-btn" @click="search">
                <SearchBtn></SearchBtn>
            </div>
        </form>
    </div>
</template>

<script setup lang="ts">
import { Search } from '@element-plus/icons-vue';
import SearchBtn from '../icons/SearchBtn.vue';
import {ref} from 'vue';
import  {Base}  from "@/components/constant/index";
import router from '@/router'
const searchContent = ref('')

function search(){
    const routeData = router.resolve({
    path: 'all',
    query: {
        keyword: searchContent.value
    }
    })
    window.open(routeData.href, '_blank')
}
</script>

<style scoped>
.center-search-bar{
    width: 362px;
    height: 40px;
}
.nav-searchform{
    width: 360px;
    height: 38px;
    margin: 0 0 0 0;
    padding: 0 48px 0 4px;
    border: solid;
    border-width: 0.2mm;
    border-radius: 8px;
    border-color: #DDDDDD;
    border-radius: 8px 8px 8px 8px;
    background-color: #F7F7F7;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    position: relative;
}
.nav-search-content{
    padding: 0px 8px 0px 8px;
    border: 2px;
    width: 304px;
    height: 28px;
    box-sizing: border-box;
    display: flex;
}
.nav-search-input{
    width: 264px;
    height: 28px;
    padding-left: 10px;
    background-color: inherit;
    display: inline-block;
    font-size: 1em;
    border: none;
    border-radius: 4px;
    outline:none;
}
.nav-search-btn{
    width: 32px;
    height: 32px;
    display: flex;
    position: absolute;
    right: 7px;
    padding: 7px 2px 1px 7px;
    border-radius: 4px;
}
/* 划过搜索框变白 */
.nav-searchform:hover{
    animation-name: change-white;
    animation-duration: 200ms;
    animation-delay: 200ms;
    animation-fill-mode: forwards;
}
@keyframes change-white{
    to{
        background-color: white;
    }
}
/* 聚焦搜索框变灰色 */
.nav-search-input:focus{
    background-color: #EEEEEE;
}
/* 按钮划过变灰色 */
.nav-search-btn:hover{
    animation-name: change-grey;
    animation-duration: 200ms;
    animation-delay: 200ms;
    animation-fill-mode: forwards;
}
@keyframes change-grey{
    to{
        background-color: #E6E6E6;
    }
}
</style>