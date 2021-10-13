import Vue from 'vue'
import App from './App'
import router from './router'
import {
	RouterMount
} from 'uni-simple-router'
import Toast from './common/transfer/toast'
import {
	http
} from '@/common/service/service.js'
import { store } from '@/store/index.js'

App.mpType = 'app'

import uView from "uview-ui";
Vue.use(uView);

// request请求
Vue.prototype.$http = http

// store
Vue.prototype.$store = store

// 引入工具类
import nh_utils from '@/common/utils/nh_utils.js'
Vue.prototype.$utils = nh_utils

// 引入lodash，lodash占用大概1M
// import _ from 'lodash'
// Vue.prototype._ = _

// 引入dayjs
import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat';
dayjs.extend(customParseFormat);
Vue.prototype.$dayjs = dayjs
// 挂载log
Vue.prototype.$log = (str, title = '$log') => {
	console.log('[' + title + ']：', str)
}
Vue.prototype.$save = (key, value) => {
	uni.setStorageSync(key, value)
}
const save = (key, value) => {
	uni.setStorageSync(key, value)
}
const get = (key) => {
	return uni.getStorageSync(key)
}
const log = (str, title = '$log') => {
	console.log('[' + title + ']：', str)
}

Vue.prototype.$api = {
	save,
	get,
	log
}

// 全局挂载toast对象
// Vue.use(Toast)
import Toasts from '@/components/common/toast'
import toast from '@/common/transfer/toast.js'
Vue.component('n-toast', Toasts)
toast(Vue)

// 挂载全局菜单
import WechatMenu from '@/components/common/wechat-menu'
Vue.component('wechatMenu', WechatMenu)
import AcidMenuPopup from '@/components/context/acid-menu-popup'
Vue.component('acidMenuPopup', AcidMenuPopup)




const app = new Vue({
	...App
})
//v1.3.5起 H5端 你应该去除原有的app.$mount();使用路由自带的渲染方式
// #ifdef H5
RouterMount(app, '#app');
// #endif

// #ifndef H5
app.$mount(); //为了兼容小程序及app端必须这样写才有效果
// #endif
