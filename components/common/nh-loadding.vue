<template>
	<view v-if="inShow" class="nh-loadding" :style="{'z-index': zIndex}">

		<view class="mask" :style="{'z-index': zIndex-1}">
			<view class="content-wrapper">
				<view class="content">
					<image src="@/static/loadding.png"></image>
					<text>
						{{title}}
					</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			// title: {
			// 	type: String,
			// 	default: '加载中',
			// },
			// zIndex: {
			// 	type: Number,
			// 	default: 999999,
			// },
		},
		data() {
			return {
				// 辅助变量
				bodyHeight: '',
				// 辅助变量
				// isMask: false,
				zIndex: 99999,
				title: '加载中',
				inShow: false,
			}
		},
		methods: {
			/**
			 * @param {Object} el 当前调用loadding的元素目前暂未实现，用于控制页面的滚动
			 */
			show() {
				// this.$log(title);
				// this.$log(status);
				// this.$log(zIndex);
				let title = ''
				let status = ''
				let zIndex = -1

				// 适配参数
				if (arguments.length > 0) {
					for (let item of arguments) {
						if (typeof(item) === 'number') zIndex = item
						if (typeof(item) === 'boolean') status = item
						if (typeof(item) === 'string') title = item
					}
					// arguments.forEach(item=>{
					// 	if(typeof(item)==='number') zIndex = item
					// 	if(typeof(item)==='boolean') status = item
					// 	if(typeof(item)==='string') title = item
					// })
				}

				// this.$log(title, 'title');
				// this.$log(status, 'status');
				// this.$log(zIndex, 'zIndex');

				if (title) this.title = title
				if (zIndex || zIndex == 0) this.zIndex = zIndex
				if (status != -1) this.inShow = status

				// 处理滚动 (APP、MP都不支持)
				// #ifdef H5
				// console.log('111111111111')
				if (status && status != -1) {

					// 只有滚动区域大于可视区域才处理
					if (document.body.scrollHeight > document.body.offsetHeight) {
						this.bodyHeight = document.body.scrollHeight
						document.body.style.height = '100vh'
						document.body.style.overflow = 'hidden'
					}

					// this.$log(document.body.scrollHeight, 'scrollHeight');
					// this.$log(document.body.offsetHeight, 'offsetHeight');
					// document.body.style.backgroundColor  = "red";
				} else if (!status && status != -1) {
					if (this.bodyHeight) {
						this.bodyHeight = ''
						document.body.style.height = 'unset'
						document.body.style.overflow = 'unset'
					}
				}
				//#endif
				// 处理滚动

			},
		},

	}
</script>

<style lang="scss" scoped>
	@-webkit-keyframes spin {
		0% {
			-webkit-transform: rotate(0deg);
		}

		100% {
			-webkit-transform: rotate(360deg);
		}
	}

	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}

		100% {
			transform: rotate(360deg);
		}
	}

	.nh-loadding {
		position: absolute;
		top: 0;
		height: 100vh;

		.mask {
			position: fixed;
			height: 100vh;
			left: 0;
			right: 0;
			// background-color: rgba(0, 0, 0, 1);
			// background-color: #f00;
			opacity: 1;
			overflow: hidden;

			display: flex;
			justify-content: center;
			align-items: center;

			.content-wrapper {
				display: flex;
				justify-content: center;
				align-items: center;
				height: 200rpx;
				width: 200rpx;
				background-color: rgba(0, 0, 0, .3);

				.content {
					color: #fff;
				}

				image {
					width: 100rpx;
					height: 100rpx;
					-webkit-animation: spin 1.2s linear infinite;
					animation: spin 1.2s linear infinite;
				}

				text {
					display: block;
				}
			}
		}
	}
</style>
