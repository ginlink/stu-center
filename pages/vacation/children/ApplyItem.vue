<template>
	<view v-if="title" style="display: flex;" :style="totalStyle">
		<text style="flex: 1;font-size: 34rpx;">{{title}}</text>
		<view class="" style="flex: 1.5;text-align: right;font-size: 34rpx;">
			<text style="color: #7f7f7f;">{{value}}</text>
			<uni-icons style="" type="arrowright" size="18"></uni-icons>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			title: String,
			value: String,
			totalStyle: Object,
		},
	}
</script>

<style>
</style>
