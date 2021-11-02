<template>
  <view class="notice">
    <view class="navbar">
      <u-navbar title="公告" :border-bottom="false" titleColor="#303133" titleBold>
        <!-- #ifndef MP -->
        <view slot="right">
          <!-- 右侧菜单功能 -->
          <wechat-menu class="wechat-menu-wrapper"></wechat-menu>
        </view>
        <!-- #endif -->
      </u-navbar>
    </view>

    <view class="content">
      <view class="list">
        <u-cell-group>
          <u-cell-item
            :title="item.title"
            :value="item.date.slice(5, 10)"
            :arrow="true"
            arrow-direction="right"
            v-for="item in noticeList"
            :key="item.id"
            @click="itemClick(item.id)"
          ></u-cell-item>
        </u-cell-group>
      </view>
    </view>

    <n-toast ref="nToast"></n-toast>
  </view>
</template>

<script>
export default {
  components: {},
  data() {
    return {}
  },
  onLoad() {},
  computed: {
    noticeList() {
      const notices = this.$store.getters?.notices

      return notices || []
    },
  },
  methods: {
    itemClick(id) {
      if (!id) return

      uni.navigateTo({
        url: `/pages/notice/detail?id=${id}`,
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.notice {
  min-height: calc(100vh - 88rpx);

  .content {
    padding: 30rpx;

    background-color: #fff;
    border-radius: 15rpx;
    /* .list {
      .item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .title,
        .date {
          white-space: nowrap;
        }
        .title {
          text-overflow: ellipsis;
          overflow: hidden;
        }
      }
    } */
  }
}
</style>
