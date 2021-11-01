<template>
  <view class="index">
    <stu-center v-if="startPage.indexOf('pages/stu/stu') != -1" />
    <console v-else-if="startPage.indexOf('pages/console/console') != -1" />
    <view v-else> 出错 </view>

    <view class="popup-wrapper">
      <u-popup v-model="show" mode="center" border-radius="14" width="80%" :mask-close-able="false">
        <view class="popup-content">
          <view class="title">更新说明</view>
          <!-- <view class="content" v-for="content in contents">{{ content.text }}</view> -->
          <view class="content" v-for="content in contents" :key="content.id">
            <view class="text">[{{ content.id }}]{{ content.text }}</view>
            <view class="url" @click="look(content.url)"> 去查看 </view>
          </view>
        </view>
        <view class="footer" @click="sure">
          <view class="sure">我知道了，不再显示</view>
        </view>
      </u-popup>
    </view>
  </view>
</template>

<script>
import { START_PAGE, VERSION } from '@/common/misc.js'
import StuCenter from './stu/stu.vue'
import Console from './console/console.vue'
import UButton from '../uview-ui/components/u-button/u-button.vue'

function isUpdateVersion(o, n) {
  console.log('[](o, n):', o, n)
  const oArr = o.split('.')
  const nArr = n.split('.')
  const len = oArr.length

  for (let i = 0; i < len; ++i) {
    const nNum = parseInt(nArr[i])
    const oNum = parseInt(oArr[i])

    //截断处理
    if (nNum == oNum) continue
    else if (nNum > oNum) return true
    else return false
  }

  return false
}

export default {
  components: {
    StuCenter,
    Console,
    UButton,
  },
  data() {
    return {
      comparedVersion: false,
      startPage: '',
    }
  },
  created() {
    this.startPage = uni.getStorageSync(START_PAGE) || '/pages/console/console'
  },
  computed: {
    show: {
      get() {
        const localVersion = uni.getStorageSync(VERSION)
        const remoteVersion = this.$store.getters.version?.version

        // 比较过version，则不再弹窗
        if (this.comparedVersion) return false

        // 有更新，则显示弹窗
        if (localVersion && remoteVersion) {
          return isUpdateVersion(localVersion, remoteVersion)
        } else if (!localVersion) {
          // 第一次进来，显示弹窗
          return true
        }

        return false
      },
      set(val) {
        console.log('[](val):', val)
        // this.show = val
        return val
      },
    },
    contents() {
      const contents = this.$store.getters.version?.contents

      return contents || []
    },
  },
  methods: {
    sure() {
      console.log('[](我知道了):')
      // 更新本地版本
      const version = this.$store.getters.version?.version

      if (version) {
        uni.setStorageSync(VERSION, version)
        this.comparedVersion = true
      }
    },
    look(url) {
      uni.navigateTo({
        url,
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.index {
  .popup-wrapper {
    .popup-content {
      padding: 40rpx 30rpx 30rpx;
      .title {
        font-size: 32rpx;
        font-weight: 500;
        text-align: center;
      }
      .content {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 15rpx 0;
        .url {
          color: #4177f6;
          font-size: 24rpx;
        }
      }
    }

    .footer {
      border-top: 1px solid #eeeeee;

      .sure {
        text-align: center;
        padding: 20rpx;
        color: #4177f6;
        font-weight: 500;
      }
    }
  }
}
</style>
