import uniPopup from '@/components/uni-popup/uni-popup.vue'
import uniPopupMessage from '@/components/uni-popup/uni-popup-message.vue'
import uniPopupDialog from '@/components/uni-popup/uni-popup-dialog.vue'

// 封装跳转提示失败2021-1-14 17:13:46
const $Tips = function(options) {
	// {
	// 		title: ''
	// 		path: ''
	// 		delay: ''
	// }
	// 说明：不考虑tab页面
	let title = options && options.title || ''
	let path = options && options.path || ''
	let delay = options && options.delay || 0
}

export default {
	uniPopup,
	uniPopupMessage,
	uniPopupDialog
}
