<template>
	<view class="report-back">
		<view class="navbar">
			<!-- <u-navbar back-text="销假" :border-bottom="false" titleColor="#303133" titleBold></u-navbar> -->
			<u-navbar title="销假" :border-bottom="false" titleColor="#303133" titleBold></u-navbar>
		</view>

		<view class="remove-vac">
			<view class="way" @click.native="itemClick(1)">
				<view class="title">销假方式</view>
				<view class="content">{{location}}</view>
				<view class="icon">
					<uni-icons type="arrowright" size="17"></uni-icons>
				</view>
			</view>
			<view class="notice">
				<view class="title">销假注意事项</view>
				<view class="content">在规定区域定位打卡销假</view>
			</view>
			<view class="request">
				打卡要求：请在校园内定位销假
			</view>
			<view class="location">
				<view class="title">当前位置</view>
				<view class="content" :class="{'content-active': locationActived}">{{ locationContent }}</view>
			</view>
		</view>

		<!-- <view class="" style="background: #fff;padding: 0 10px;">
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
		</view> -->

		<!-- 销假 -->
		<button class="sure-btn" :class="{'sure-btn-active':isValid}" :disabled="!isValid" @click="sureReportBack">确认销假</button>
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

				this.locationActived = true
				this.locationContent = '已获取'
				this.location = '西北校区定位销假'
			}, 1500)
		},

		data() {
			return {
				location: '请选择销假地点',
				locationContent: '正在获取中...',
				locationActived: false,
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
		computed: {
			isValid(){
				return this.location != '请选择销假地点' && this.locationActived
			}
		},
		methods: {
			sureReportBack() {
				console.log('[](销假):', )

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

				this.location = params[0] && params[0].label
			}
		}
	}
</script>

<style lang="scss" scoped>
.report-back{
	.active {
		background: #00ff00;
	}

	.sure-btn {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		background-color: $wm-tx5-color;
		font-size: 30rpx;
		color: $wm-bg-fff;
		height: 80rpx;
		line-height: 80rpx;
	}
	.sure-btn-active{
		background-color: $theme-color;
	}
	uni-view{
		font-size: 30rpx;
	}
	view{
		font-size: 30rpx;
	}

	.remove-vac{
		background-color: #fff;
		padding: 0 30rpx;
		display: flex;
		flex-direction: column;
		/* gap: 15rpx; */
		justify-content: center;
		font-size: 30rpx;
		.way{
			display: flex;
			justify-content: flex-start;
			align-items: center;
			padding: 15rpx 0;
			.title{
				flex: 1;
			}
			.content{
				color: $wm-tx5-color;
				margin-right: 15rpx;
			}
		}
		.notice{
			/* padding: 15rpx 0; */
			.content{
				font-size: 26rpx;
				margin-top: 15rpx;
			}
		}
		.request{
			border-top: 1px solid #f5f5f5;
			margin-top: 7rpx;
			padding: 12rpx 0;
		}
		.location{
			display: flex;
			justify-content: space-between;
			align-items: center;
			border-top: 1px solid #f5f5f5;
			margin-top: 7rpx;
			padding: 12rpx 0;
			.title{
				color: $wm-tx5-color;
			}
			.content{
				color: red;
			}
			.content-active{
				color: green;
			}
		}
	}
}
</style>
