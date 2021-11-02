import {
	VACATIONDETAIL,
	FORMATSECOND,
	FORMATHOUR,
	FORMATDAY,
	MAXLENGTH,
} from '@/common/const/index.js'
export const vac = {
	created() {
		// 初始化
		if (this.vacationDetail === undefined) return this.$log('请在对象上设置vacationDetail', 'warning')
		this.vacationDetail = uni.getStorageSync(VACATIONDETAIL)
	},
	methods: {
		freshVacDetail() {
			this.vacationDetail = uni.getStorageSync(VACATIONDETAIL) // 更新数据
		},
		sortVacList(vacation) {
			// 根据时间排序
			// 开始时间
			vacation = vacation.sort((a, b) => {
				let aTime = this.$dayjs(a.detail.startTime, FORMATSECOND).unix()
				let bTime = this.$dayjs(b.detail.startTime, FORMATSECOND).unix()

				return bTime - aTime
			})
			return vacation
		},
		saveLoacl() {
			this.vacationDetail.data.list = this.sortVacList(this.vacationDetail.data.list)

			this.$log(this.vacationDetail.data.list, 'this.vacationDetail.data.list')

			if (this.vacationDetail.data.list.length >= MAXLENGTH) {
				let poped = this.vacationDetail.data.list.pop() // 弹出最后一个元素
				this.$log(poped, 'poped')
			}

			// 存储
			uni.setStorageSync(VACATIONDETAIL, this.vacationDetail)
		},

	}
}

/**
 * <u-toast ref="uToast" />
 */
export const toast = {

	created() {
		this.$nextTick(() => {
			// 检查页面是否应用toast组件
			if (!this.$refs.uToast) return console.log('[err]:uToast is undefined');
		})
	},
	methods: {
		// 工具函数
		warningBack(msg) {
			this.warning(msg, {}, () => {
				uni.navigateBack({})
			})
		},
		warning(msg, params = {}, callback = '') {
			this.toast(msg, 'warning', params, callback)
		},
		errorBack(msg) {
			this.error(msg, {}, () => {
				uni.navigateBack({})
			})
		},
		error(msg, params = {}, callback = '') {
			this.toast(msg, 'error', params, callback)
		},
		successBack(msg) {
			this.success(msg, {}, () => {
				uni.navigateBack({})
			})
		},
		success(msg, params = {}, callback = '') {
			this.toast(msg, 'success', params, callback)
		},
		toast(msg, type, params, callback) {
			this.$nextTick(function () {
				this.$refs.uToast.show({
					title: msg,
					type,
					// url: '',
					params,
					callback,
				})
			})
		},
		// 工具函数
	}
}
