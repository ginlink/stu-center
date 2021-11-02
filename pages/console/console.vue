<template>
  <view class="console">
    <view class="navbar">
      <!-- <u-navbar :is-back="false" title="幸运盒子"> -->
      <!-- <u-navbar is-back back-icon-name="" title="幸运盒子"> -->
      <u-navbar :is-back="false" :border-bottom="false">
        <view class="slot-wrap">
          <view class="back" @click="$emit('back')">
            <!-- <image src="@/static/home/box-black.png"></image> -->
            <!-- <image src="@/static/home/logo200.png"></image> -->
            <image src="@/static/home/box-colorful.png"></image>
            <view class="back-text"> 口袋模拟假条 </view>
          </view>
        </view>
        <!-- #ifndef MP -->
        <view slot="right">
          <!-- 右侧菜单功能 -->
          <view class="home-menu">
            <wechat-menu class="wechat-menu-wrapper" :popStyle="{ marginBottom: '88rpx' }"></wechat-menu>
          </view>
        </view>
        <!-- #endif -->
      </u-navbar>
    </view>
    <!-- <button type="default" @click="stuCenter">学生中心</button> -->

    <view class="content">
      <view class="notice">
        <!-- <u-notice-bar mode="horizontal" :list="noticeList"></u-notice-bar> -->
        <u-notice-bar mode="vertical" :list="noticeList" :duration="3000" @click="noticeClick"></u-notice-bar>
      </view>

      <view class="u-page">
        <!-- 目前只有home生效 -->
        <view v-if="current == 0" class="home">
          <view class="box-wrapper">
            <view class="box">
              <view class="box-item" v-for="item in applications" @click="action(item.id)" :key="item.id">
                <view class="icon">
                  <image :src="item.icon"></image>
                </view>
                <view class="title">
                  {{ item.name }}
                </view>
              </view>
              <view class="box-item" @click="localAction(1)">
                <view class="icon">
                  <!-- <image src="@/static/console/more.png"></image> -->
                  <u-icon name="setting" size="118"></u-icon>
                </view>
                <view class="title"> 设置 </view>
              </view>
              <view class="box-item" @click="localAction(2)">
                <view class="icon">
                  <!-- <image src="@/static/console/more.png"></image> -->
                  <u-icon name="file-text" size="118"></u-icon>
                </view>
                <view class="title"> 更新日志 </view>
              </view>
              <view class="box-item">
                <view class="icon">
                  <image src="@/static/console/more.png"></image>
                </view>
                <view class="title"> 更多敬请期待... </view>
              </view>

              <!-- <view class="box-item" @click="action(1)">
						
							<view class="icon">
								<image src="@/static/home/student.png"></image>
							</view>
							<view class="title">
								学生中心
							</view>
						</view>
						<view class="box-item" @click="action(2)">
							<view class="icon">
								<image src="@/static/console/application.png"></image>
							</view>
							<view class="title">
								下载
							</view>
						</view>
						<view class="box-item">
							<view class="icon">
								<image src="@/static/console/more.png"></image>
							</view>
							<view class="title">
								更多敬请期待...
							</view>
						</view> -->
            </view>
          </view>
        </view>

        <view v-if="current == 1" class="profile">
          <!-- <view class="icon" @click="showInfo=true"> -->
          <!-- <u-loading :show="showLoadding" size="56"></u-loading>
					<view v-if="showLoadding" class="text">
						加载中...
					</view>
					<u-empty :show="showEmpty" text="所谓伊人，在水一方" mode="list"></u-empty> -->
          <!-- <u-popup v-model="showInfo" mode="center" height="60%"> -->
          <!-- <u-popup v-model="showInfo" mode="center" width="70%" closeable>
						<view class="wrapper">
							<view class="about">
								<view>
									一位不知名的业余的程序猿感谢您的使用！
								</view>
								<view>
									若发现bug，请邮联hap_hap@163.com
								</view>
								<view style="color:red">
									本程序仅供学习交流使用，忽用于商业用途！
								</view>
							</view>
							
						</view>
					</u-popup> -->
          <!-- </view> -->
        </view>
      </view>
    </view>

    <!-- 与包裹页面所有内容的元素u-page同级，且在它的下方 -->
    <!-- <u-tabbar v-model="current" :list="list" @change="change"></u-tabbar> -->

    <n-toast ref="nToast"></n-toast>
  </view>
</template>

<script>
import mockIcon from '@/static/home/student.png'
import applicationIcon from '@/static/console/application.png'
import moreIcon from '@/static/console/more.png'

const existApp = [
  { id: 1, name: '模拟请假', icon: mockIcon },
  { id: 2, name: '下载', icon: applicationIcon },
]

export default {
  data() {
    return {
      showInfo: false,
      showEmpty: false,
      showLoadding: true,

      list: [
        {
          iconPath: 'home',
          selectedIconPath: 'home-fill',
          text: '首页',
          // count: 2,
          // isDot: true,
          customIcon: false,
        },
        {
          iconPath: 'account',
          selectedIconPath: 'account-fill',
          text: '我的',
          // isDot: true,
          customIcon: false,
        },
      ],
      current: 0,
    }
  },
  computed: {
    applications() {
      const appNum = this.$store.getters?.appNum
      if (!appNum) return []

      return existApp.slice(0, appNum)
    },
    noticeList() {
      const notices = this.$store.getters?.notices

      return notices ? notices.map((item) => item.title) : []
    },
  },
  methods: {
    noticeClick(index) {
      console.log('[](点击notice):', index)
      uni.navigateTo({
        url: `/pages/notice/detail?id=${index + 1}`,
      })
    },
    action(flag) {
      switch (flag) {
        case 1:
          // 学生中心
          this.$utils.u_tips('/pages/stu/stu')
          break
        case 2:
          // 学生中心
          this.$utils.u_tips('/pages/console/download')
          break
      }
    },
    localAction(id) {
      switch (id) {
        case 1:
          this.$utils.u_tips('/pages/setting/index')
          break
        case 2:
          this.$utils.u_tips('/pages/record/index')
          break
      }
    },
    actionHome() {},
    actionProfile() {
      setTimeout(() => {
        this.showLoadding = false
        this.showEmpty = true
      }, 3000)
    },
    change(index) {
      this.$log(index, 'index')

      if (index == 1) {
        // 我的
        return this.actionProfile()
      }

      // 默认首页
      return this.actionHome()
    },
    stuCenter() {
      // this.$toast(this,'111',2)
      // this.$tips(this,'111')
      // this.$showLoadding(this,999999)
      // setTimeout(()=>{
      // 	this.$hideLoadding(this)
      // },1500)
      this.$Router.push({
        name: 'stuCenter',
      })
    },
  },
  created() {},
}
</script>

<style lang="scss" scoped>
.console {
  background-color: $wm-bg-fff;
  min-height: 100vh;
  .u-page {
    .home {
      .box-wrapper {
        margin-top: 60rpx;
        .box {
          display: flex;
          flex-wrap: wrap;
          margin: 0 30rpx;
          /* gap: 30rpx; */
          /* row-gap: 60rpx; */
        }
        .box-item {
          /* flex: 1; */
          width: 47%;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 30rpx 0;
          .icon {
            // width: 160rpx;
            // height: 160rpx;
            width: 120rpx;
            height: 120rpx;
          }
          image {
            width: 100%;
            height: 100%;
            /* border-radius: 50%; */
          }
          .title {
            margin-top: 15rpx;
          }
        }
      }
    }
    .profile {
      min-height: 70vh;
      display: flex;
      justify-content: center;
      align-items: center;
      .icon {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .text {
        margin-top: 15rpx;
      }
      .wrapper {
        min-height: 100%;
        padding: 60rpx 30rpx 30rpx;
        display: flex;
        align-items: center;
        justify-content: center;
        .about {
        }
      }
    }
  }

  .slot-wrap {
    width: 100%;
    display: flex;
    align-items: center;
    font-size: 30rpx;
    padding: 0 15rpx;

    .back {
      display: flex;
      align-items: center;
      margin-left: 15rpx;
      image {
        width: 40rpx;
        height: 40rpx;
      }
    }

    .back-text {
      margin-left: 30rpx;
    }

    .right {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      text-align: right;
      margin-right: 15rpx;

      .add {
        color: #007aff;
        margin-left: 30rpx;
      }

      .is-del {
        color: #f00;
      }
    }
  }

  // .home-menu{
  // 	position: relative;
  // 	z-index: 999;
  // }
}
</style>
