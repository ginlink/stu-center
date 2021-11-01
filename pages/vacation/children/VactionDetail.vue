<template>
  <view v-if="vacation" class="vacation-detail" :class="{ 'vacation-detail-passed': isPassed }">
    <view class="navbar">
      <!-- <u-navbar back-text="请假详情" :border-bottom="false"> -->
      <u-navbar title="请假详情" :border-bottom="false" titleColor="#303133" titleBold>
        <!-- #ifndef MP -->
        <view slot="right">
          <!-- 右侧菜单功能 -->
          <wechat-menu class="wechat-menu-wrapper"></wechat-menu>
        </view>
        <!-- #endif -->
      </u-navbar>
    </view>

    <!-- 假条详情页面 -->
    <view v-if="vacation" class="content" :class="{ space: isPassed }">
      <view class="status" style="background: #fff; padding: 0 15px">
        <view class="status-content">
          <view class="icon" :style="{ backgroundColor: statu && statu.color }">
            <u-icon name="checkbox-mark" :color="'#fff'" size="112"></u-icon>
          </view>
          <text style="font-size: 36rpx; font-weight: 500; display: block; margin-top: 30rpx">{{
            statu && statu.title
          }}</text>
        </view>
        <view class="check" style="">
          <view class="" style="border-bottom: 1px solid #eee; padding-bottom: 15rpx; font-size: 32rpx">
            审批情况
          </view>
          <view class="" style="margin-top: 30rpx">
            <text style="font-size: 30rpx">{{ vacation.detail.checkName }}审批</text>
            <text style="margin-top: 20rpx; margin-left: 3px; color: #9b9b9b; font-size: 24rpx">
              ({{ vacation.detail.checkTime.slice(0, -3) }})</text
            >
          </view>
          <view class="" style="margin-top: 15rpx; color: #9b9b9b; font-size: 26rpx"> 审批意见: {{ CpuAdvise }} </view>
        </view>
        <view style="margin-top: 30rpx">
          <view style="display: flex; padding-bottom: 15rpx; border-bottom: 1px solid #eee">
            <text style="flex: 1; font-size: 32rpx">请假详情</text>
            <text style="flex: 2; color: #9b9b9b; text-align: right; font-size: 28rpx">
              申请时间{{ vacation.detail.applyTime }}
            </text>
          </view>
          <view class="detail-body">
            <view
              class="detail-item"
              style="display: flex; align-items: center; padding: 3px 0"
              v-for="(item, index) in vacationDetialList"
              :key="index"
            >
              <view style="flex: 1">
                <view class="title">
                  {{ item.text }}
                </view>
              </view>
              <!-- <view style="flex: 2;margin-left: 20rpx;"> -->
              <view style="flex: 2">
                <view class="value">
                  {{ item.value }}
                  <view v-if="index == 'endTime' && showDayDiff" class="badge">
                    {{ showDayDiff }}
                  </view>
                </view>
              </view>
            </view>
          </view>
        </view>

        <!-- <vac-detail-info :VacationDetailInfo="VacationDetailInfo" @click.native="changeVacInfo"></vac-detail-info> -->
      </view>
      <vac-footer v-if="statu && statu.code === 3" @action="action"></vac-footer>

      <!-- 模态框 -->
      <u-modal v-model="show" :content="content">
        <!-- <u-input v-model="name"></u-input> -->
      </u-modal>
    </view>
    <view v-else class="no-data">
      <view class="text"> 无此假条数据！ </view>
    </view>
  </view>
</template>

<script>
import VacFooter from './VacFooter.vue'
import { VACATIONDETAIL, FORMATSECOND, FORMATHOUR, FORMATDAY } from '@/common/const/index.js'

export default {
  onLoad(params) {
    console.log('params:', params)
    this.currentParams = params

    this.initData(params)
    this.initEvent()
  },
  onShow() {
    this.vacationDetail = uni.getStorageSync(VACATIONDETAIL) // 更新数据
    this.vacationDetail = Object.assign({}, this.vacationDetail)
  },
  components: {
    VacFooter,
  },
  computed: {
    showDayDiff() {
      if (!this.vacation) return

      let start = this.$dayjs(this.vacation.detail.startTime, FORMATSECOND)
      let end = this.$dayjs(this.vacation.detail.endTime, FORMATSECOND)

      // this.$log(this.vacation.startTime, 'startTime')
      this.$log(start, 'start')

      let dayDiff = end.diff(start, 'day') + 1

      if (!dayDiff) return ''

      return dayDiff + '天'
    },
    isPassed() {
      if (!this.vacation) return

      return this.vacation.detail.status == 3
    },
    CpuAdvise() {
      switch (this.vacation.detail.status) {
        case 0:
          return '未审核'
          break
        case 1:
          return '未通过'
          break
        case 2:
          return '同意'
          break
        case 3:
          return '同意'
          break
      }
    },
  },
  data() {
    return {
      currentParams: {},

      statu: null,
      status: [
        {
          code: 0,
          title: '未审核',
          color: '#3685F1',
        },
        {
          code: 1,
          title: '审批未通过',
          color: '#ee2222',
        },
        {
          code: 2,
          title: '已完成',
          color: '#3685F1',
        },
        {
          code: 3,
          title: '审批通过',
          color: '#09BA08',
        },
      ], // 审批状态0未审核 1通过 2已完成
      conditionTitle: '审批通过',
      conditionColor: '#09BA08',
      show: false,
      content: '东临碣石，以观沧海',

      vacationDetialList: {
        // applyTime: {
        // 	text: '请假申请时间:',
        // 	value: '2021-01-12 10:00:00'
        // },
        startTime: {
          text: '开始请假时间:',
          value: '2021-01-12 10:00:00',
        },
        endTime: {
          text: '请假结束时间:',
          value: '2021-01-12 10:00:00',
        },
        type: {
          text: '请假类型:',
          value: '事假',
        },
        reason: {
          text: '请假原因:',
          value: '身体不适',
        },
        isTellParent: {
          text: '是否告知家长:',
          value: 0,
        },
        isLeaveSchool: {
          text: '是否需要离校:',
          value: 0,
        },
        urgentContactName: {
          text: '紧急联系人:',
          value: '马云',
        },
        urgentContactTel: {
          text: '紧急联系人电话:',
          value: '132838238823',
        },
        other: {
          text: '附件: 无',
          value: '',
        },
      },
      vacation: null,
    }
  },
  methods: {
    action(flag) {
      switch (flag) {
        case 1:
          // 续假
          this.$utils.u_tips(
            {
              loadding: false,
              data: {
                action: 'edit',
                id: this.vacation.id,
              },
            },
            '/pages/public/pub-edit-vac'
          )

          break
        case 2:
          // 销假
          this.$utils.u_tips(
            {
              loadding: false,
              data: {
                id: this.vacation.id,
              },
            },
            './ReportBack'
          )
          break
      }
    },
    initData(params) {
      this.initVacation(params)

      this.initStatu()
    },
    initStatu() {
      let vacation = this.vacation
      console.log('vacation:', vacation)
      this.statu = this.status[vacation.detail.status]
    },
    initVacation(params) {
      let id = parseInt(params && params.id)
      if (!id) return

      // [服务器]
      let VacationDetailInfo = uni.getStorageSync(VACATIONDETAIL)
      let vacDetailList = VacationDetailInfo.data.list

      this.vacation = vacDetailList.find((item) => {
        return item.id == id
      })

      this.$log(this.vacation)

      if (!this.vacation) return

      console.log('[](this.vacation):', this.vacation)

      // this.vacationDetialList.applyTime.value = this.vacation.detail.applyTime
      this.vacationDetialList.endTime.value = this.vacation.detail.endTime.slice(0, -3)
      this.vacationDetialList.isLeaveSchool.value = this.vacation.detail.isLeaveSchool == 0 ? '否' : '是'
      this.vacationDetialList.isTellParent.value = this.vacation.detail.isTellParent == 0 ? '否' : '是'
      this.vacationDetialList.other.value = this.vacation.detail?.other ?? ''
      this.vacationDetialList.reason.value = this.vacation.detail.reason
      this.vacationDetialList.startTime.value = this.vacation.detail.startTime.slice(0, -3)
      this.vacationDetialList.type.value = this.vacation.detail.type
      this.vacationDetialList.urgentContactName.value = this.vacation.detail.urgentContactName
      this.vacationDetialList.urgentContactTel.value = this.vacation.detail.urgentContactTel

      console.log('vacation:', this.vacation)
    },
    changeVacInfo() {
      // 弹窗修改
      this.show = true
    },

    initEvent() {
      uni.$on('refreshVacDetailDetail', () => {
        this.initData(this.currentParams)
        this.$log('刷新数据', 'initEvent')
      })
    },
  },
}
</script>

<style lang="scss" scoped>
// .vacation-detail-passed {
// 	overflow: auto;
// }

.vacation-detail {
  min-height: 100vh;
  background-color: $wm-bg-fff;

  // 占位，将底部tabbar空间预留
  .space {
    padding-bottom: 120rpx;
    padding-bottom: calc(120rpx + constant(safe-area-inset-bottom));
    padding-bottom: calc(120rpx + env(safe-area-inset-bottom));
  }

  .content {
    .check {
      margin-top: 80rpx;
    }

    .status-content {
      text-align: center;
      margin-top: 80rpx;
    }
    .icon {
      margin: 0 auto;
      width: 200rpx;
      height: 200rpx;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: red;
      border-radius: 50%;
    }
  }

  .no-data {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80vh;
  }

  .detail-body {
    margin-top: 15rpx;

    .badge {
      display: inline-block;
      font-size: 22rpx;
      color: #ffffff;
      background-color: #3685f1;
      text-align: center;
      vertical-align: baseline;
      padding: 7rpx 8rpx;
      margin-left: 6rpx;
      border-radius: 10rpx;
      line-height: 1;
    }
  }

  .detail-item {
    .title,
    .value {
      color: #636363;
    }
    .title {
      font-size: 29rpx;
    }
    .value {
      font-size: 29rpx;
    }
  }

  .detail-item:last-child {
    .title {
      text-align: unset;
      text-justify: unset;
      /*ie6-8*/
      text-align-last: unset;
      /* ie9*/
      -moz-text-align-last: unset;
      /*ff*/
      -webkit-text-align-last: unset;
      /*chrome 20+*/
    }
  }
}
</style>
