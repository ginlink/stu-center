<template>
  <view class="notice">
    <view class="navbar">
      <u-navbar title="公告" :border-bottom="false" titleColor="#303133" titleBold>
        <!-- #ifndef MP -->
        <view slot="right">
          <!-- 右侧菜单功能 -->
          <!-- <wechat-menu class="wechat-menu-wrapper" @menu="menuShow=true" @close="action(2)"></wechat-menu> -->
          <wechat-menu class="wechat-menu-wrapper"></wechat-menu>
        </view>
        <!-- #endif -->
      </u-navbar>
    </view>

    <view class="content">
      <view class="text">
        {{ noticeContent || '暂无内容' }}
      </view>

      <view class="button">
        <u-button type="primary" @click="back">我知道了</u-button>
      </view>
    </view>

    <n-toast ref="nToast"></n-toast>
  </view>
</template>

<script>
export default {
  components: {},
  data() {
    return { noticeId: undefined }
  },
  onLoad(params) {
    const id = params.id

    this.noticeId = id
  },
  computed: {
    noticeContent() {
      if (!this.noticeId) return ''

      const notices = this.$store.getters?.notices

      return notices && notices.find((item) => item.id == this.noticeId)?.content
    },
  },
  methods: {
    back() {
      uni.navigateBack({})
    },
  },
}
</script>

<style lang="scss" scoped>
.notice {
  min-height: calc(100vh - 88rpx);

  .content {
    padding: 30rpx;

    .button {
      margin-top: 30rpx;
    }
  }
}
</style>
