<template>
	<view v-if="Object.keys(item).length>0" class="stu-info">
		<view class="uni-flex uni-row">
			<view class="flex-item" style="flex:.5; display: flex;align-items: center;" @click="action(1)">
				<image style="width: 50px;height: 50px;border-radius: 50%; margin: 0 auto;" :src="item.icon" />
			</view>
			<view class="flex-item" style="flex:1" @click="action(2)">
				<view class="info-base" style="flex:1;">
					<span style="font-size: 38rpx;font-weight: 700;">{{item.name}}</span>
					<span style="font-size: 30rpx;color: silver;margin-left: 5px;">{{item.yard}}</span>
				</view>
				<view style="flex: 1;">{{item.grade}}</view>
			</view>
			<view class="flex-item" style="line-height: 60px;flex:.5;">
				<uni-icons type="arrowright" size="17" style="position: absolute;right: 20px;"></uni-icons>
			</view>
		</view>

	</view>
</template>

<script>
	import uniIcons from "@/components/uni-icons/uni-icons.vue"

	export default {
		props: {
			item: {
				type: Object,
				default () {
					return {}
				}
			}
		},
		comments: {
			uniIcons
		},
		methods: {
			action(flag) {
				switch (flag) {
					case 1:
						// 上传图片
						this.$emit('chooseImage')

						break;
					case 2:
						// 修改信息
						this.$emit('changeInfo')

						break;
				}
			}
		},
	};
</script>
<style lang="scss" scoped>
	.stu-info {
		background: #fff;
		padding: 30rpx 0;
	}
</style>
