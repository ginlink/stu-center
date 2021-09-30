import Request from '@/common/luch-request/index.js'
import configService from './config.service.js'

let apiUrl = configService.apiUrl;

const http = new Request()
http.setConfig((config) => { /* 设置全局配置 */
	config.baseUrl = apiUrl /* 根域名不同 */
	config.header = {
		...config.header
	}
	return config
})

http.validateStatus = (statusCode) => {
	return statusCode === 200
}

http.interceptor.request((config, cancel) => { /* 请求之前拦截器 */
	return config
})

// 必须使用异步函数，注意
http.interceptor.response(async (response) => { /* 请求之后拦截器 */
	return response
}, (response) => {
	return response
})

export {
	http,
}
