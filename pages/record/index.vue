<!--
 * @Author: jiangjin
 * @Date: 2021-09-30 16:55:30
 * @LastEditTime: 2021-10-13 19:59:19
 * @LastEditors: jiangjin
 * @Description: 
 * 
-->
<template>
  <view class="record">
    <u-navbar
      title="更新日志"
      :border-bottom="false"
      :backIconName="backIconName"
      backIconSize="56"
      titleColor="#303133"
      titleBold
      :customBack="customBack"
    >
      <!-- #ifndef MP -->
      <view slot="right">
        <!-- 右侧菜单功能 -->
        <!-- <wechat-menu class="wechat-menu-wrapper" @menu="menuShow=true" @close="action(2)"></wechat-menu> -->
        <wechat-menu class="wechat-menu-wrapper"></wechat-menu>
      </view>
      <!-- #endif -->
    </u-navbar>
    <view class="content">
      <u-time-line>
        <u-time-line-item nodeTop="2" v-for="node in nodes" :key="node.id">
          <!-- 此处自定义了左边内容，用一个图标替代 -->
          <template v-slot:node>
            <view class="u-node" style="background: #19be6b">
              <!-- 此处为uView的icon组件 -->
              <u-icon name="plus" color="#fff" :size="24"></u-icon>
            </view>
          </template>
          <template v-slot:content>
            <view>
              <view class="u-order-title">{{ node.version }}</view>
              <view class="u-order-desc">
                <view v-for="piece in node.pieces">{{ piece }}</view>
              </view>
              <view class="u-order-time">{{ node.updateTime }}</view>
            </view>
          </template>
        </u-time-line-item>
      </u-time-line>
    </view>
  </view>
</template>

<script>
import { VERSION_NODES } from '@/common/misc.js'
const reversedNodes = VERSION_NODES.reverse()

export default {
  components: {},
  data() {
    return {
      nodes: reversedNodes,
    }
  },
  created() {},
  methods: {},
}
</script>
<style lang="scss" scoped>
.record {
  .content {
    padding: 60rpx 60rpx 0;
    background-color: #fff;

    .u-node {
      width: 44rpx;
      height: 44rpx;
      border-radius: 100rpx;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #d0d0d0;
    }

    .u-order-title {
      color: #333333;
      font-weight: bold;
      font-size: 32rpx;
    }

    .u-order-desc {
      color: rgb(150, 150, 150);
      font-size: 28rpx;
      margin-bottom: 6rpx;
    }

    .u-order-time {
      color: rgb(200, 200, 200);
      font-size: 26rpx;
    }
  }
}
</style>
