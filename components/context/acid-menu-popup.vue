<template>
	<view class="acid-menu-popup">
		<!-- 公共弹出菜单页 -->

		<!-- 弹出层 -->
		<u-popup class="result-popup" v-model="show" mode="bottom" border-radius="10">
			<view class="menu">
				<view class="text">
					正在努力开发中...
				</view>
				<view class="tips">
					<u-alert-tips type="warning" :show-icon="true" :title="title" :description="description"></u-alert-tips>
					<!-- <u-alert-tips type="warning" :show-icon="true" :title="'11111'" :description="232323"></u-alert-tips> -->
					
				</view>
				<!-- <view v-if="hasFuncs(inFuncs[0])" class="item" @click="menu(0)">
			</view> -->
			</view>
		</u-popup>


		<!-- 弹出层 -->
	</view>
</template>

<script>
	// import AcidPopResult from '@/components/context/acid-pop-result'
	export default {
		props: {
			menuShow: {
				type: Boolean,
				default: false,
			},
			profile: {
				type: Object,
				default () {
					return null
				}
			},
			funcs: {
				type: Array,
				default () {
					return []
				}
			},
		},
		components: {
			// AcidPopResult,
		},
		data() {
			return {
				title: '提示',
				description: '假条可以向左滑动，并删除yo',
				
				actionType: 'add', // 操作类型，新增或者修改
				inFuncs: [], // 目前具有功能
				maxId: -1,
				resultRules: {},
				resultForm: {}, // 新增数据的表单
				showAddResult: false,
				infoRules: {},
				infoForm: {},
				showChangeInfo: false,
				show: this.menuShow,
			}
		},
		watch: {
			show(n, o) {
				this.$emit('update:menuShow', n)
			},
			menuShow(n, o) {
				// console.log('n:', n);
				this.show = n
			},
		},
		methods: {},
	}
</script>

<style lang="scss" scoped>
	.acid-menu-popup {


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
