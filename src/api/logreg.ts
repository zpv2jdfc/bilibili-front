// 导入axios实例
import httpRequest from '@/request/index'

// 定义接口的传参
interface UserInfoParam {
	userName: string,
	userPW: string
}

// 登录
export function apiUserLogin(param: UserInfoParam) {
    return httpRequest({
		url: '/auth/login',
		method: 'post',
		data: param,
	})
}
// 注册
export function apiUserReg(param: UserInfoParam) {
    return httpRequest({
		url: '/auth/register',
		method: 'post',
		data: param,
	})
}