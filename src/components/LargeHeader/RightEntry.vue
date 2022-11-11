<template>
    <ul class="right-entry">
        <li class="header-avatar">
            <div style="position:relative;">
                <a href="" target="_blank" class="header_entry-mini">
                    <picture class="v-img">
                        <!-- <source srcset="https://i2.hdslb.com/bfs/face/99953a4bdcb321329a40a87ef467b9eb28b483d0.jpg@120w_120h_1c.avif"> -->
                        <img src="https://i2.hdslb.com/bfs/face/99953a4bdcb321329a40a87ef467b9eb28b483d0.jpg@120w_120h_1c.avif"  loading="lazy" onload>
                    </picture>
                </a>
            </div>
        </li>
        <li class="v-popover-wrap">
            <a class="right-entry-outside" href="" target="_blank" @mouseenter="iconShake('favorite')" :class="{ shake: disabled1 }">
                <Favorite></Favorite>
                <span class="right-entry-text">收藏</span>
            </a>
        </li>
        <li class="v-popover-wrap">
            <a class="right-entry-outside" href="" target="_blank" @mouseenter="iconShake('history')" :class="{ shake: disabled2 }">
                <History></History>
                <span class="right-entry-text">历史</span>
            </a>
        </li>
        <li class="right-entry-item--upload">
            <li class="v-popover-wrap">
                <a href="" target="_blank">
                    <div class="header-upload-entry">
                        <Upload></Upload>
                        <span class="header-upload-entry__text">投稿</span>
                    </div>
                </a>
            </li>
        </li>
    </ul>
</template>

<script setup lang="ts">
import Upload from '../icons/Upload.vue'
import Favorite from '../icons/Favorite.vue'
import History from '../icons/History.vue'
import {ref} from 'vue'

const disabled1 = ref(false);
const disabled2 = ref(false);
function iconShake(channel: string){
    switch(channel){
        case 'favorite':  disabled1.value = true; 
        setTimeout(() => {
            disabled1.value = false
        }, 400) 
        break;
        case 'history':  disabled2.value = true;
        setTimeout(() => {
            disabled2.value = false
        }, 400) 
        break;
    }

}
</script>

<style scoped>
.right-entry{
    display: flex;
    width: 466px;
    height: 50px;
    margin-left: 10px;
}
.header-avatar{
    position: relative;
    width: 60px;
    height: 50px;
    padding-right: 10px;
}
.header_entry-mini{
    position: absolute;
    top: 5px;
    left: 10px;
    width: 38px;
    height: 38px;
    border-radius: 50%;
}
.v-img{
    position: relative;
    display: inline-block;
    border-radius: 50%;
    width: 100%;
    height: 100%;
}
.v-img img{
    display: block;
    width: 100%;
    height: 100%;
    border: 2px solid #fff;
    border-radius: 50%;
}
.right-entry-item--upload{
    display: block;
    min-width: 50px;
    text-align: center;
    width: 100px;
    height: 34px;
}
.v-popover-wrap{
    position: relative;
    margin-top: 6px;
}
.header-upload-entry{
    float: right;
    /* margin-left: 10px;
    margin-top: 10px; */
    display: flex;
    align-items: center;
    justify-content: center;
    width: 90px;
    height: 34px;
    border-radius: 8px;
    background: #fb7299;
    color: #fff;
    font-size: 14px;
    line-height: 20px;
}
.header-upload-entry__text{
    color: inherit;
    text-align: center;
    margin-left: 5px;
}
.right-entry-outside{
    display: flex;
    align-items: center;
    flex-direction: column;
    font-size: 13px;
    min-width: 50px;
}
.shake svg{
    animation: shake 0.3s cubic-bezier(0.4, 0.3, 0.6, 0.7) both;
    transform: translate3d(0, 0, 0);
}
@keyframes shake {
    10%,
    90%{
        transform: translate3d(0, -1px, 0);
    }
    20%,
    80%{
        transform: translate3d(0, -3px, 0);
    }
    40%,
    60%{
        transform: translate3d(0, -4px, 0);
    }
    50% {
        transform: translate3d(0, -5px, 0);
    }
    0%,
    100% {
        transform: translate3d(0, 0, 0);
    }
}
</style>