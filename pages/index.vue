<!--
 * @Author: jiangjin
 * @Date: 2021-10-13 22:04:25
 * @LastEditTime: 2021-10-13 23:47:31
 * @LastEditors: jiangjin
 * @Description: 
 * 
-->
<template>
  <view class="index">
    <view class="logo">
      <image :src="logo"></image>
    </view>
  </view>
</template>

<script>
import { START_PAGE } from '@/common/misc.js'
import logo from '@/static/home/logo200.png'
export default {
  data() {
    return {
      logo,
    }
  },
  mounted() {
    this.initPage()
  },
  methods: {
    initPage() {
      const startPage = uni.getStorageSync(START_PAGE) || '/pages/console/console'

      if (startPage) {
        uni.redirectTo({
          url: startPage,
        })
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@keyframes holp {
  0% {
    transform: scale(1);
  }
  60% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
.index {
  min-height: 100vh;
  min-width: 100vw;

  display: flex;
  justify-content: center;
  align-items: center;

  .logo {
    border: 1px solid #eee;
    border-radius: 50%;
    box-shadow: 5px 5px 5px #888888;
    width: 136rpx;
    height: 136rpx;
    animation: holp 1s infinite;
    image {
      width: 136rpx;
      height: 136rpx;
      transform: scale(0.5);
    }
  }
}
</style>
