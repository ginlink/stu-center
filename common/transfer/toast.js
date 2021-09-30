export default (Vue) => {

	Vue.prototype.$toast = (instance, title, type, url, callback) => {
		// console.log(instance instanceof VueComponent)
		check(instance, instance => {
			instance.showToast(title, type, url, callback)
		})
	}
	Vue.prototype.$tips = (instance, title, type = 'success', url = '') => {
		// instance.showTips(title, type, url)
		check(instance, instance => {
			instance.showTips(title, type, url)
		})

	}

	Vue.prototype.$confirm = (instance, content, confirm, cancel, title) => {
		check(instance, instance => {
			instance.showModel(content, confirm, cancel, title)
		})
	}

	Vue.prototype.$showLoadding = (instance, title, zIndex) => {
		check(instance, instance => {
			instance.toggleLoadding(title, true, zIndex)
		})
	}
	Vue.prototype.$hideLoadding = (instance, ) => {
		check(instance, instance => {
			instance.toggleLoadding(false)
		})
		
	}


	/**
	 * [辅助函数] 检查参数是否正确
	 * @param {Object} instance
	 * @param {Object} success
	 */
	function check(instance, success) {
		let delay = 100
		if (typeof(instance) != 'object') return console.log('=>>>>>[err]:file(toast)(程序出错，是不是没有传入当前vue实例?)')
		
		setTimeout(()=>{
			instance.$nextTick(function() {
				instance = instance.$refs.nToast
				if (instance) return success(instance)
				console.log('=>>>>>[err]:file(toast)(程序出错，是不是没有在页面定义n-toast?)')
			})
		},delay)

	}
}
