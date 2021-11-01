<script>
// import {
// 	VacationDetailInfo,
// 	centerMenu,
// } from '@/common/mock-data/vac.js'

import { VACATIONDETAIL, CENTERMENU } from '@/common/const/index.js'
import { START_PAGE } from '@/common/misc.js'

export default {
  onLaunch: function () {
    uni.showLoading({
      title: '加载中',
    })
    console.log('App Launch')

    this.initData() // 初始化全局信息

    this.initCenterMenu()

    this.initAppNum()

    this.initNoticeList()

    this.initVersion()
  },
  onShow: function () {
    console.log('App Show')
  },
  onHide: function () {
    console.log('App Hide')
  },
  methods: {
    initVersion() {
      this.$http
        .get('/api/version')
        .then((res) => {
          const data = res.data.data ?? {}
          const version = data
          if (!version) return

          this.$store.commit('updateVersion', version)
        })
        .catch((err) => {
          console.log('err:func(initVersion)(version request failed!)', err)
        })
    },
    initNoticeList() {
      this.$http
        .get('/api/notices')
        .then((res) => {
          const data = res.data.data ?? {}
          const notices = data?.notices
          if (!notices) return

          this.$store.commit('updateNotices', notices)
        })
        .catch((err) => {
          console.log('err:func(initNoticeList)(notices request failed!)', err)
        })
    },
    initAppNum() {
      this.$http
        .get('/api/appNum')
        .then((res) => {
          const data = res.data.data ?? {}
          const appNum = data?.app_num
          if (!appNum) return

          this.$store.commit('updateAppNum', appNum)
        })
        .catch((err) => {
          console.log('err:func(applications)(created)', err)
        })
    },
    initCenterMenu() {
      this.$http
        // .get('/api/centermenu_v2')
        .get('/api/centermenu_v2_backup')
        .then((res) => {
          const data = res.data.data ?? {}

          this.$store.commit('updateCenterMenu', data)
          uni.hideLoading()
        })
        .catch((err) => {
          console.log('err:func(created)(stu)', err)
        })
    },
    // this.initVacation
    initData() {
      let vacDetail = uni.getStorageSync(VACATIONDETAIL)
      if (!uni.getStorageSync(VACATIONDETAIL)) {
        // [服务器] 请求默认数据
        this.$http
          .get('/api/vac/sample')
          .then((res) => {
            this.$api.save(VACATIONDETAIL, res.data)
          })
          .catch((err) => {
            console.log('err:func(App)(initData)', err)
          })
      }

      return

      // let vacDetail = uni.getStorageSync(VACATIONDETAIL)
      // if (!uni.getStorageSync(VACATIONDETAIL)) {
      // 	uni.setStorageSync(VACATIONDETAIL, VacationDetailInfo)
      // }
      // if (!uni.getStorageSync(CENTERMENU)) {
      // 	uni.setStorageSync(CENTERMENU, centerMenu)
      // }
      // console.log('[APP]vacDetail:', vacDetail);
    },
  },
}
</script>

<style lang="scss">
@import 'uview-ui/index.scss';
/* uni.css - 通用组件、模板样式库，可以当作一套ui库应用 */
@import './common/uni.css';

// 通用form样式
.form-wrapper {
  padding: 0 30rpx 0;
  background-color: $wm-bg-fff;

  .switch {
    /* background-color: #f00; */
  }

  .btn {
    font-size: 28rpx;
    color: $wm-bg-fff;
    background-color: $theme-color;
    // margin-top: 30rpx;
    margin-top: 60rpx;
  }
}

// 通用form样式
// 通用右侧菜单
.wechat-menu-wrapper {
  margin-right: 15rpx;
}

// 通用右侧菜单

/* #ifdef APP-PLUS */
page {
  background-color: #f8f8f8;
}
view {
  font-size: 30rpx;
}

/* #endif */

/* H5 兼容 pc 所需 */
/* #ifdef H5 */
@media screen and (min-width: 768px) {
  body {
    overflow-y: scroll;
  }
}

/* 顶栏通栏样式 */
/* .uni-top-window {
	    left: 0;
	    right: 0;
	} */
uni-page-body {
  background-color: #f8f8f8 !important;
  min-height: 100% !important;
  height: auto !important;
}

.uni-top-window uni-tabbar .uni-tabbar {
  background-color: #fff !important;
}

.uni-app--showleftwindow .hideOnPc {
  display: none !important;
}

/* #endif */
</style>
