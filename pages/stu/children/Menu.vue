<!--
 * @Author: jiangjin
 * @Date: 2021-09-30 16:55:30
 * @LastEditTime: 2021-10-13 23:26:44
 * @LastEditors: jiangjin
 * @Description: 
 * 
-->
<template>
  <view v-if="Object.keys(myMenu).length > 0" class="stu-menu">
    <view class="menu-item" v-for="menu in myMenu" :key="menu.id" @click="navClick(menu)">
      <view class="icon"><image :src="menu.icon" mode="" style="height: 20px; width: 20px"></image></view>

      <view class="title">
        {{ menu.title }}
      </view>
      <view class="content">
        <uni-icons type="arrowright" size="17"></uni-icons>
      </view>

      <!-- <navbar class="item-navbar" :lay_left="{width:'50px',margin:'auto',display:'flex',alignItems:'center'}" :lay_center="{margin:'auto'}"
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
			</navbar> -->
    </view>

    <n-toast ref="nToast"></n-toast>
  </view>
</template>

<script>
// import {
// 	myMenu,
// 	Vacation
// } from '@/res.js'
import Navbar from '@/components/common/navbar.vue'

import uniIcons from '@/components/uni-icons/uni-icons.vue'
export default {
  name: 'Menu',
  components: {
    Navbar,
    uniIcons,
  },
  data() {
    return {
      myMenu: {},
    }
  },
  mounted() {
    this.initMenu()
  },
  methods: {
    // 初始化
    initMenu() {
      uni.showLoading({
        title: '加载中',
      })

      // [服务器] 更新菜单信息
      this.$http
        .get('/api/vac/centermenu')
        .then((res) => {
          const data = res.data.data
          const menuNum = data.menu_num
          const list = data.list

          this.myMenu = list && list.slice(0, menuNum ?? 0)

          uni.hideLoading()
          // if (res.data.code == 1) this.myMenu = res.data.data.list
        })
        .catch((err) => {
          console.log('err:func(Menu)(created)', err)
        })
    },
    // 初始化
    // 导航栏点击事件
    navClick(myMenu) {
      console.log('myMenu:', myMenu)
      if (myMenu.url === '') return this.$toast(this, '该功能开发中...', 3)

      this.$utils.u_tips(myMenu && myMenu.url)
    },
  },
}
</script>
<style lang="scss" scoped>
.stu-menu {
  width: 100%;
  font-size: 30rpx;
  background-color: #fff;
  /* .item {
			border-bottom: 1px solid #F5F5F5;
			background-color: $wm-bg-fff;
			.item-navbar{
			}
		} */
  .menu-item {
    /* width: 100%; */
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: 0 30rpx;
    padding: 15rpx 0;
    border-bottom: 1px solid #f5f5f5;

    .icon {
      width: 40rpx;
      height: 40rpx;
    }
    .title {
      flex: 1;
      margin-left: 30rpx;
      font-size: 30rpx;
    }
  }
}
</style>
