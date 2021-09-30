<template>
	<view class="">
		<view class="navbar">
			<u-navbar back-text="销假" title="" :border-bottom="false"></u-navbar>
		</view>

		<view class="" style="background: #fff;padding: 0 10px;">
			<flex2 v-if="item" :leftStyle="item && item.lStyle" :rightStyle="item && item.rStyle" :totalStyle="item && item.tStyle"
			 v-for="(item,index) in reportBackData" @click.native="itemClick(item.id)">
				<template v-slot:left>
					<text>{{item && item.left}}</text>
				</template>
				<template v-slot:right>
					<text>{{item && item.right}}</text>
					<uni-icons v-if="item && item.icon &&  item.icon.is" :type="item.icon.type" :size="item.icon.size"></uni-icons>
				</template>
			</flex2>
		</view>

		<!-- 销假 -->
		<button class="sure-btn" style="" :disabled="sureDisabled" @click="sureReportBack">确认销假</button>
		<uni-popup ref="popup" type="message">
			<uni-popup-message type="success" :message="reportSureMessage" :duration="2000"></uni-popup-message>
		</uni-popup>

		<!-- 选择器 -->
		<u-select v-model="isPositionSelect" mode="single-column" :list="positions" @confirm="positionConfirm"></u-select>

		<u-toast ref="uToast" />
	</view>
</template>

<script>
	import flex2 from '@/components/common/flex/flex2.vue'
	import pop from '@/utils/tips.js'
	import {
		vac,
		toast
	} from '@/common/mixin/index.js'

	export default {
		mixins: [vac, toast],
		components: {
			flex2,
			...pop
		},
		onLoad(params) {
			this.currentId = parseInt(params.id)
			
			setTimeout(() => {
				let data = this.reportBackData
				data[0].right = this.position
				data[data.length - 1].rStyle.color = '#00cc00'
				data[data.length - 1].right = this.positionStatus.ed
				this.sureDisabled = false
			}, 1500)
		},

		data() {
			return {
				currentId: -1,
				vacationDetail: null,

				reportSureMessage: '销假成功',
				sureDisabled: true,
				isPositionSelect: false,
				positionStatus: {
					ing: '正在获取中...',
					ed: '已获取'
				},
				position: '西北校区定位销假',
				positions: [{
						label: '西北校区定位销假',
						value: '0'
					},
					{
						label: '东南校区定位销假',
						value: '1'
					},
				],
				reportBackData: [{
					id: 1,
					left: '销假方式',
					right: '正在定位中...',
					tStyle: {}, // 总样式
					lStyle: {},
					rStyle: {
						textAlign: 'right',
						color: 'silver'
					},
					icon: {
						is: true,
						type: 'arrowright',
						size: 18
					}
				}, {
					id: 2,
					left: '销假注意事项',
					lStyle: {
						flex: 10
					},
					tStyle: {
						paddingTop: '10px'
					},
				}, {
					id: 3,
					left: '在规定区域定位打卡销假',
					lStyle: {
						flex: 10,
						fontSize: '14px',
					},
					tStyle: {
						borderBottom: '1px solid #eee',
						paddingTop: '10px'
					},
				}, {
					id: 4,
					left: '打卡要求：请在校园内定位销假',
					lStyle: {
						flex: 10
					},
					tStyle: {
						borderBottom: '1px solid #eee',
						padding: '5px 0'
					},
				}, {
					id: 5,
					left: '当前位置',
					right: '正在获取中...',
					tStyle: {
						padding: '7px 0',
					},
					lStyle: {
						color: 'silver'
					},
					rStyle: {
						textAlign: 'right',
						// color: '#00cc00',
						color: '#fa0000',
					},
				}, ]
			}
		},
		methods: {
			sureReportBack() {
				// [服务器] 更新假条状态
				if (!this.vacationDetail) return this.errorBack('程序出错')
				if (this.currentId == -1 || !this.currentId) return this.errorBack('程序出错')
				
				// [服务器] 更新假条状态
				// this.vacationDetail.data.list.find(item => {
				// 	return item.id = this.currentId
				// }).status = 2
				let res = this.vacationDetail.data.list.find(item => {
					return item.id == this.currentId
				})
				res.detail.status = 2
				this.$log(res)
				// return
				this.saveLoacl()  // 保存到本地
				
				// 跳转到假条详情
				// this.$refs.popup.open()
				
				uni.$emit('refreshVacDetailDetail')
				uni.$emit('refreshVacDetailAction')
				
				this.successBack('销假成功')
				

			},
			itemClick(id) {
				if (id !== 1) return
				// 显示模态框
				this.isPositionSelect = true
			},
			positionConfirm(params) {
				console.log('params:', params);
				this.position = params[0] && params[0].label
				this.reportBackData[0].right = this.position
			}
		}
	}
</script>

<style lang="scss" scoped>
	.active {
		background: #00ff00;
	}

	.sure-btn {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		background-color: $theme-color;
		font-size: 28rpx;
		color: $wm-bg-fff;
	}
</style>
