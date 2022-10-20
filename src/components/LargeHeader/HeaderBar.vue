<template>
    <div class="header-bar">
        <ul>
            <li >
                <a class="icon-home" href="https:/www.bilibili.com" target="_blank">
                    <BiliIcon></BiliIcon>
                    <div class="mini-header-title">
                        <span>首页</span>
                    </div>
                </a>
            </li>
            <li class="default-li">
                <a href="/" target="_blank">
                    <span>番剧</span>
                </a>
            </li>
            <li class="default-li">
                <a href="/" target="_blank">
                    <span>直播</span>
                </a>
            </li>
            <li class="char-4-li">
                <a href="/" target="_blank">
                    <span>游戏中心</span>
                </a>
            </li>
        </ul>
    </div>
</template>
<script setup lang="ts">
import BiliIcon from '../icons/BiliIcon.vue'
</script>
<style scoped>
ul{
    width: 608px;
    height: 64px;
    list-style: none;
}
.default-li{
    float: left;
    width: 43px;
    height: 64px;
}
.default-li a{
    width: 28px;
    height: 56px;
    margin: 0 15px 0 0;
    align-items: center;
    line-height: 64px;
    display: inline-block;
}
.char-4-li{
    float: left;
    width: 71px;
    height: 64px;
}
.char-4-li a{
    width: 56px;
    height: 64px;
    margin: 0 15px 0 0;
    align-items: center;
    line-height: 64px;
    display: inline-block;
}
ul li:first-child{
    float: left; 
    width: 148px; 
    height: 56px;
}
.icon-home{
    margin: 0 20px 0 0;
    width: 128px;
    height: 64px;
    display: flex;
    align-items: center;
    /* justify-content: space-between;
    margin-right: 20px;
    height: 56px; */
}
.icon-home svg{
    margin: 0 25px 0 0;
    width: 60px;
    height: 64px;
    fill: #1ABDE6;
    /* float: left; */
}
.icon-home div{
    width: 43px;
    height: 20px;
    /* float: left; */
}
.icon-home .mini-header-title{
    display: flex;
    align-items: center;
    text-align: center;
    font-size: 14px;
    line-height: 20px;
    cursor: pointer;
}
.header-bar{
    padding: 0 24px;
}
</style>