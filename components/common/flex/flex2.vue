<template>
	<view style="display: flex;" :style="totalStyle">
		<!-- 左边 -->
		<view class="" style="flex: 1;font-size: 34rpx;" :style="leftStyle">
			<slot name="left"></slot>
		</view>

		<!-- 右边 -->
		<view class="" style="flex: 1;font-size: 34rpx;" :style="rightStyle">
			<slot name="right"></slot>
		</view>

		<!-- 图标 -->
		<!-- <uni-icons style="" type="arrowright" size="18"></uni-icons> -->
	</view>
</template>

<script>
	export default {
		props: {
			totalStyle: {
				type: Object,
				default () {
					return {}
				}
			},
			rightStyle: {
				type: Object,
				default () {
					return {}
				}
			},
			leftStyle: {
				type: Object,
				default () {
					return {}
				}
			},
		},
	}
</script>

<style>
</style>
