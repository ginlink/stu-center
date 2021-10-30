<template>
  <view class="index">
    <stu-center v-if="startPage.indexOf('pages/stu/stu') != -1" />
    <console v-else-if="startPage.indexOf('pages/console/console') != -1" />
    <view v-else> 出错 </view>
  </view>
</template>

<script>
import { START_PAGE } from '@/common/misc.js'
import StuCenter from './stu/stu.vue'
import Console from './console/console.vue'

export default {
  components: {
    StuCenter,
    Console,
  },
  data() {
    return {
      startPage: '',
    }
  },
  created() {
    this.startPage = uni.getStorageSync(START_PAGE) || '/pages/console/console'
  },
  methods: {},
}
</script>

<style lang="scss" scoped></style>
