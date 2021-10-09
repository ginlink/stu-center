<template>
	<view class="wechat-menu">
		<!-- 微信小程序菜单 -->
		<view class="wechat-menu-content" :style="navStyle">
			<view class="menu" @click="action(1)">
				<image src="@/static/home/wechat-more-000.png"></image>
			</view>
			<view class="line">

			</view>

			<view class="close" @click="action(2)">
				<image src="@/static/home/wechat-close-000.png"></image>
			</view>


		</view>

		<!-- 封装的全局弹窗菜单 -->
		<!-- <acid-menu-popup :menuShow.sync="menuShow" :customStyle="customStyle"></acid-menu-popup> -->


		<!-- 弹出层 -->
		<view class="acid-menu-popup">
			<u-popup class="result-popup" v-model="menuShow" mode="bottom" border-radius="10">
				<view class="menu" :style="popStyle">
					<view class="text">
						<view>
							其他功能正在努力开发中...
						</view>
						<view>
							有新思想或者其他需求，请邮联hap_hap@163.com
						</view>
						<view style="color:red">
							本程序仅供学习交流使用，忽用于商业用途！
						</view>
					</view>
					<view class="tips">
						<view class="tips-item">
							<u-alert-tips type="warning" :show-icon="true" title="提示" :description="description"></u-alert-tips>
						</view>
						<view class="tips-item">
							<u-alert-tips type="warning" :show-icon="true" :description="description1"></u-alert-tips>
						</view>
						<view class="tips-item">
							<u-alert-tips type="warning" :show-icon="true" :description="description2"></u-alert-tips>
						</view>
					</view>
				</view>
			</u-popup>
		</view>
		<!-- 弹出层 -->


	</view>
</template>

<script>
	/**
	 * 模仿微信小程序右边导航按钮
	 * 使用说明：宽高为自适应，所以需要外部定义，
	 * 若要改变背景颜色请传入navStyle，
	 * 格式为绑定:style的格式
	 * 
	 * 事件：
	 * @menu 点击菜单事件
	 * @close 点击关闭事件
	 */
	export default {
		props: {
			popStyle: {
				type: Object,
				default () {
					return null
				}
			},
			navStyle: {
				type: Object,
				default () {
					return null
				}
			}
		},
		data() {
			return {
				menuShow: false,
				title: '提示',
				description: '1.假条可以向左滑动，并删除yo',
				description1: '2.点击头像可以更换头像',
				description2: '3.更多...',
			}
		},
		methods: {
			action(flag) {
				if (flag == 1) {
					// 菜单
					this.menuShow = true
				}
				if (flag == 2) {
					// 关闭
					// #ifdef APP-PLUS  
					return plus.runtime.quit();
					// #endif

					this.$log('关闭');
					// uni.showToast({
					// 	title: '关闭'
					// })
					// this.$toast(this,'关闭',2)
				}
			},
		}

	}
</script>

<style lang="scss" scoped>
	$wechat-img-height: 35rpx;

	.wechat-menu {
		// 该容器为包裹容器，无其他意义
	}

	.wechat-menu-content {
		// 高度100%
		// 初始宽度为内容撑开
		// height: 100%;
		// width: 100%;
		// background-color: rgb(12, 71, 131);
		display: flex;
		align-items: center;
		justify-content: space-around;
		padding: 12rpx;
		// border: 1px solid #ff0;
		// border: 1px solid rgba(0,0,0,.3);
		border: 1px solid $wm-bd-color;
		border-radius: 30rpx;

		.menu {
			padding: 0 10rpx;
			padding-right: 30rpx;

			display: flex;
			justify-content: center;

			image {
				width: $wechat-img-height;
				height: $wechat-img-height;
			}
		}

		.line {
			// flex: 0 1 2rpx;
			height: $wechat-img-height;
			// border-left: 1px solid $wm-bd-color;
			border-left: 1px solid rgba(0, 0, 0, .05);
		}

		.close {
			// flex: 0 1 40rpx;
			// border-left: 1px solid #ff0;
			// padding: 0 30rpx;
			// margin: 0 30rpx;
			padding: 0 10rpx;
			padding-left: 30rpx;

			display: flex;
			justify-content: center;

			image {
				width: $wechat-img-height;
				height: $wechat-img-height;
			}
		}
	}

	.acid-menu-popup {
		.tips {
			.tips-item {
				margin-top: 15rpx;
			}
		}


		.result-popup {

			.menu {
				// display: flex;
				// align-items: center;
				padding: 30rpx;
			}

			.item {
				flex: 0 1 150rpx;
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: space-around;

				&>.icon {

					&>image {
						width: 100rpx;
						height: 100rpx;
					}
				}
			}

			.result-popup-result {
				color: rgba(124, 187, 81, .9);
			}

			.result-popup-result-active {
				color: rgba(219, 25, 52, .9);
			}
		}

		.info-form {
			padding: 0 30rpx 30rpx;

			&>button {
				background-color: $theme-color;
				color: $wm-bg-fff;
			}
		}

	}
</style>
