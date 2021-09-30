<template>
	<view v-if="Object.keys(myMenu).length>0" class='menu'>
		<view class="item" v-for="menu in myMenu" :key="menu.id">

			<navbar class="item-navbar" :lay_left="{width:'50px',margin:'auto',display:'flex',alignItems:'center'}" :lay_center="{margin:'auto'}"
			 @click.native="navClick(menu)">
				<template v-slot:leftnav>
					<view class="" style="margin: 0 auto; display: flex;">
						<image :src="menu.icon" mode="" style="height: 20px;width: 20px;"></image>
					</view>
				</template>
				<template v-slot:centernav style="margin: auto;">
					<view class="" style="text-align: left;font-size: 32rpx;">
						{{menu.title}}
					</view>
				</template>
				<template v-slot:rightnav>
					<uni-icons type="arrowright" size="17"></uni-icons>
				</template>
			</navbar>
		</view>

		<n-toast ref='nToast'></n-toast>

	</view>
</template>

<script>
	// import {
	// 	myMenu,
	// 	Vacation
	// } from '@/res.js'
	import Navbar from '@/components/common/navbar.vue'

	import uniIcons from "@/components/uni-icons/uni-icons.vue"
	export default {
		name: 'Menu',
		components: {
			Navbar,
			uniIcons
		},
		data() {
			return {
				myMenu: {},
			}
		},
		created() {
			this.initMenu()

		},
		methods: {
			// 初始化
			initMenu() {
				uni.showLoading({
					title: "加载中"
				})

				// [服务器] 更新菜单信息
				this.$http.get('/api/vac/centermenu').then(res => {
					uni.hideLoading()
					if (res.data.code == 1) this.myMenu = res.data.data.list
				}).catch(err => {
					console.log('err:func(Menu)(created)', err)
				})

			},
			// 初始化
			// 导航栏点击事件
			navClick(myMenu) {
				console.log('myMenu:', myMenu);
				if (myMenu.url === '') return this.$toast(this, '该功能开发中...', 3)

				this.$utils.u_tips({
					loadding: true,
				}, myMenu && myMenu.url)
			},

		},

	};
</script>
<style lang="scss" scoped>
	.menu {
		.item {
			border-bottom: 1px solid #F5F5F5;
			background-color: $wm-bg-fff;
			.item-navbar{
			}
		}
	}
</style>
