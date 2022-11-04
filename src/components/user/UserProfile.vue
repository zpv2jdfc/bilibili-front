<template>
    <div>
        123
    </div>
</template>


<script lang="ts" setup>
import { onMounted } from 'vue'
import { apiGetUserInfo } from '@/api/user'

function getUserInfo() {
	const param = {
		userID: '10001',
		userName: 'Mike',
		token: '13444',
	}
	apiGetUserInfo(param).then((res) => {
		console.log(res)
	})
}

onMounted(() => {
	getUserInfo()
})
</script>