<template>
	<view class="vacation-item">
		<view v-if="vacation" class="item">
			<view class="" style="flex: 1; display: flex;flex-direction: column;">
				<view class="" style="font-size: 34rpx;">
					我的 {{vacation.detail.type | showType}}申请
				</view>
				<view class="" style="font-size: 28rpx;color: silver;">
					{{time}}
				</view>
				<!-- <view class="check" :class="{'actived':vacation.detail.status}"> -->
				<view class="check" :style="{color:statusColor}">
					{{showPass}}
				</view>
			</view>
			<view class="" style="flex: .2;">
				<view class="" style="position: absolute;top:5px;color: silver;">
					{{vacation.detail.startTime | showDay}}
				</view>
				<view class="" style="position: relative;left: 50%;">
					<uni-icons type="arrowright" size="17" color="silver"></uni-icons>
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	import uniIcons from "@/components/uni-icons/uni-icons.vue"

	export default {
		components: {
			uniIcons
		},
		props: {
			vacation: {
				type: Object,
				default () {
					return null
				}
			}
		},
		filters: {
			showDay(time) {
				return time.slice(5, 11)
			},
			showType(type) {
				switch (type) {
					case 0:
						return '事假'
						break
					case 1:
						return '病假'
						break
					default:
						return '事假'
				}
			},
		},
		computed: {
			time() {
				let vacation = this.vacation
				let startTime = vacation && vacation.detail.startTime && vacation.detail.startTime
				let endTime = vacation && vacation.detail.endTime && vacation.detail.endTime

				let start = startTime.slice(5, 16)
				let end = endTime.slice(5, 16)

				let startStr2Hour = startTime.slice(0, 13)
				let endStr2Hour = endTime.slice(0, 13)

				// console.log('total:', startTime.slice(0,13));
				// return
				let hour = this.getHour(startStr2Hour, endStr2Hour)
				return start + ' 至 ' + end + ' (共' + hour + '小时)'
			},
			showPass() {
				switch (this.vacation.detail.status) {
					case 3:
						this.statusColor = '#09BB07'
						return '审批通过'
					case 1:
						this.statusColor = '#f00'
						return '未通过'
					case 0:
						this.statusColor = '#3685f1'
						return '未审核'
					case 2:
						// this.statusColor = '#3685f1'
						this.statusColor = 'silver'
						return '已完成'
				}
			},
		},
		created() {
			// console.log('vacation:', this.vacation);

			this.initStatusColor()

			// let hour = this.$dayjs().minute()
			// console.log('hour:', hour);
		},
		data() {
			return {
				statusColor: '#333'
			}
		},
		methods: {
			getUnix(str) {
				return this.parseString2DateHour(str).unix()
			},
			getHour(startStr, endStr) {
				const startObj = this.parseString2DateHour(startStr)
				const endObj = this.parseString2DateHour(endStr)
				let diffHour = endObj.diff(startObj, 'hour')
				let diffDay = endObj.diff(startObj, 'day')

				// 处理有天数差异，月差异暂不考虑
				if (Math.abs(diffDay) > 0) {
					diffHour += (diffDay * 24)
				}

				// console.log('diffHour:', diffHour);
				return diffHour
			},
			parseString2DateDay(str) {
				return this.$dayjs(str, "YYYY-MM-DD")
			},
			parseString2DateHour(str) {
				return this.$dayjs(str, "YYYY-MM-DD HH")
			},

			initStatusColor() {
				// this.$log(this.vacation.detail.status)
				switch (this.vacation.detail.status) {
					case 3:
						this.statusColor = '#09BB07'
						break
					case 1:
						this.statusColor = '#f00'
						break
					case 0:
					case 2:
						this.statusColor = '#3685f1'
						break

				}
			},

		},
	}
</script>

<style lang="scss" scoped>
	.vacation-item {
		.item {
			display: flex;
			// height: 90px;
			padding: 20rpx 30rpx;
			background: #fff;
			align-items: center;
			border-bottom: 2px solid #F5F5F5;
			position: relative;
		}

		.check {
			color: $theme-color;
		}

		.actived {
			// background-color: #f00;
			color: #09BB07;
		}
	}
</style>
