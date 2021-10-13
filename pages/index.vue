<!--
 * @Author: jiangjin
 * @Date: 2021-10-13 22:04:25
 * @LastEditTime: 2021-10-13 22:12:18
 * @LastEditors: jiangjin
 * @Description: 
 * 
-->
<template></template>

<script>
import { START_PAGE } from '@/common/misc.js'
export default {
  mounted() {
    this.initPage()
  },
  methods: {
    initPage() {
      const startPage = uni.getStorageSync(START_PAGE) ?? ''
      uni.showLoading({
        title: '加载中',
      })

      if (startPage) {
        this.$utils.u_tips(startPage)

        setTimeout(() => {
          uni.hideLoading()
        }, 300)
      }
    },
  },
}
</script>

<style lang="scss" scoped></style>
