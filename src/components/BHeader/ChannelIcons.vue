<template>
    <div>
        <el-link :href="urlDongTai" :underline="false">
            <el-image  style="width: 50px; height: 50px" :src="urlDTImage" fit="fill"  lazy />
        </el-link>
    </div>
</template>


<script setup lang="ts">
    const urlDongTai =
    'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
    const urlReMen =
    'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
    const urlDTImage =
    'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
</script>

<style scoped>
.el-image {
  border-radius: 50%;
}

</style>