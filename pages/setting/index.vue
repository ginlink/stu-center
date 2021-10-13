<!--
 * @Author: jiangjin
 * @Date: 2021-09-30 16:55:30
 * @LastEditTime: 2021-10-13 19:26:09
 * @LastEditors: jiangjin
 * @Description: 
 * 
-->
<template>
  <view class="setting">
    <u-navbar title="设置" :border-bottom="false" titleColor="#303133" titleBold> </u-navbar>

    <view class="content">
      <u-cell-group>
        <u-cell-item icon="home" title="程序启动页面" :value="startPage" @click="show = !show"></u-cell-item>
        <!-- <u-cell-item icon="integral-fill" title="会员等级" value="新版本"></u-cell-item> -->
      </u-cell-group>
    </view>

    <u-select
      v-model="show"
      mode="single-column"
      :list="startPages"
      @confirm="confirm"
      :default-value="startPageValue"
    ></u-select>
  </view>
</template>

<script>
import { START_PAGE } from '@/common/misc.js'
export default {
  components: {},
  data() {
    return {
      startPage: '应用中心(默认)',
      show: false,
      startPages: [
        {
          label: '应用中心(默认)',
          value: '/pages/console/console',
        },
        {
          label: '学生中心',
          value: '/pages/stu/stu',
        },
        // {
        //   label: '设置',
        //   value: '/pages/setting/index',
        // },
      ],
    }
  },
  created() {
    const cachedStartPageValue = uni.getStorageSync(START_PAGE) ?? this.startPages[0].value

    this.startPage = this.startPages.find((item) => item.value == cachedStartPageValue).label
  },
  computed: {
    startPageValue() {
      const defaultStartPage = this.startPages.findIndex((item) => item?.label == this.startPage) ?? 0

      return [defaultStartPage]
    },
  },
  methods: {
    confirm(params) {
      // this.form.type = params && params[0] && params[0].label
      const startPage = params[0] && params[0].label
      const startPageValue = params[0] && params[0].value
      this.startPage = startPage

      uni.setStorageSync(START_PAGE, startPageValue)
    },
  },
}
</script>
<style lang="scss" scoped>
.setting {
}
</style>
