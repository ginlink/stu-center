<template>
  <!-- 申请假条 -->
  <view class="apply-vacation">
    <view class="navbar">
      <u-navbar :title="title" :border-bottom="false" titleColor="#303133" titleBold>
        <!-- #ifndef MP -->
        <view slot="right">
          <!-- 右侧菜单功能 -->
          <wechat-menu class="wechat-menu-wrapper"></wechat-menu>
        </view>
        <!-- #endif -->
      </u-navbar>
    </view>

    <view class="content">
      <u-form :model="form" ref="uForm">
        <view v-if="currentIndex == 1" class="form-wrapper">
          <u-form-item :label-width="labelWidth" label="请假类型" prop="type">
            <u-input v-model="form.type" type="select" placeholder="请选择" @click="isTypeSelect = !isTypeSelect" />
          </u-form-item>
          <u-form-item :label-width="labelWidth" label="开始时间" prop="startTime">
            <u-input
              v-model="form.startTime"
              type="select"
              placeholder="请选择"
              @click="isStimeSelect = !isStimeSelect"
            />
          </u-form-item>
          <u-form-item :label-width="labelWidth" label="结束时间" prop="endTime">
            <u-input
              v-model="form.endTime"
              type="select"
              placeholder="请选择"
              @click="isEtimeSelect = !isEtimeSelect"
            />
          </u-form-item>
          <u-form-item label-position="top" :label-width="labelWidth" label="请假原因" prop="reason">
            <u-input
              v-model="form.reason"
              type="textarea"
              :height="textareaHeight"
              placeholder="样例假条，请修改您想修改的地方"
              auto-height
            />
          </u-form-item>
          <u-form-item :label-width="labelWidth" label="是否告知家长" prop="isTellParent">
            <u-switch class="switch" v-model="form.isTellParent"></u-switch>
          </u-form-item>
          <u-form-item :label-width="labelWidth" label="是否离开学校" prop="isLeaveSchool">
            <u-switch v-model="form.isLeaveSchool"></u-switch>
          </u-form-item>
          <u-form-item :label-width="labelWidth" label="选择假条状态" prop="statusLabel" :border-bottom="false">
            <u-input
              v-model="form.statusLabel"
              type="select"
              placeholder="请选择"
              @click="isPassSelect = !isPassSelect"
            />
          </u-form-item>
        </view>

        <view v-if="currentIndex == 2" class="form-wrapper">
          <view class="page2">
            <u-form-item :label-width="labelWidth" label="审核人(辅导员)" prop="checkName">
              <u-input v-model="form.checkName" type="text" placeholder="请输入审核人" />
            </u-form-item>
            <!-- <u-form-item :label-width="labelWidth" label="审核意见" prop="checkStatus">
							<u-input v-model="form.checkStatus" type="select" placeholder="请选择审核意见" @click="pickerAction(1)" />
							<u-select v-model="isSelectAdvise" mode="single-column" :list="advises" @confirm="confirmAction(1,$event)"></u-select>
						</u-form-item> -->
            <u-form-item :label-width="labelWidth" label="紧急联系人" prop="urgentContactName">
              <u-input v-model="form.urgentContactName" type="text" placeholder="请填写" />
            </u-form-item>
            <u-form-item :label-width="labelWidth" label="紧急联系电话" prop="urgentContactTel">
              <u-input v-model="form.urgentContactTel" type="text" placeholder="请填写" />
            </u-form-item>
          </view>
        </view>
      </u-form>

      <view class="pagenation">
        <view class="pre">
          <u-button size="mini" :disabled="currentIndex == 1" @click="btnAction(1)">上一步</u-button>
        </view>
        <view class="next">
          <u-button size="mini" :disabled="currentIndex == 2" @click="btnAction(2)">下一步</u-button>
        </view>
      </view>

      <button class="btn" @click="submit">{{ submitTitle }}</button>
    </view>

    <!-- 三个选择器 -->
    <u-select v-model="isTypeSelect" mode="single-column" :list="types" @confirm="typeConfirm"></u-select>
    <u-picker v-model="isStimeSelect" mode="time" :params="params" @confirm="sTimeConfirm"></u-picker>
    <u-picker v-model="isEtimeSelect" mode="time" :params="params" @confirm="eTimeConfirm"></u-picker>
    <u-select
      v-model="isPassSelect"
      mode="single-column"
      :list="status"
      @confirm="statusConfirm"
      :default-value="[3]"
    ></u-select>

    <u-toast ref="uToast" />

    <n-toast ref="nToast"></n-toast>
  </view>
</template>

<script>
import { VACATIONDETAIL, FORMATSECOND, FORMATHOUR, FORMATDAY, MAXLENGTH } from '@/common/const/index.js'

export default {
  data() {
    return {
      // 辅助变量
      currentIndex: 1,
      // 辅助变量

      // global
      isPassed: false,
      title: '申请假条', // 导航栏标题
      submitTitle: '提交',
      // global

      // form
      isInitDetialForm: false,
      isSelectAdvise: false,
      detailForm: {
        checkName: '',
        checkStatus: '',

        urgentContactName: '',
        urgentContactTel: '',

        // checkTime
        // applyTime
      },
      detailFormRules: {
        checkName: [
          {
            required: true,
            message: '请输入审核人（辅导员）',
            trigger: ['blur', 'change'],
          },
        ],
        checkStatus: [
          {
            required: true,
            message: '请选择审核意见',
            trigger: ['blur', 'change'],
          },
        ],
        urgentContactName: [
          {
            required: true,
            message: '请填写紧急联系人',
            trigger: ['blur', 'change'],
          },
        ],
        urgentContactTel: [
          {
            required: true,
            message: '请填写紧急联系电话',
            trigger: ['blur', 'change'],
          },
        ],
      },

      textareaHeight: 100,
      labelWidth: '30%',
      rules: {
        type: [
          {
            required: true,
            message: '请选择假条类型',
            trigger: ['blur', 'change'],
          },
        ],
        startTime: [
          {
            required: true,
            message: '请选择开始时间',
            trigger: ['blur', 'change'],
          },
        ],
        endTime: [
          {
            required: true,
            message: '请选择结束时间',
            trigger: ['blur', 'change'],
          },
        ],
        reason: [
          {
            required: true,
            message: '请填写理由',
            trigger: ['blur', 'change'],
          },
        ],
        statusLabel: [
          {
            required: true,
            message: '请选择假条状态',
            trigger: ['blur', 'change'],
          },
        ],

        checkName: [
          {
            required: true,
            message: '请输入审核人（辅导员）',
            trigger: ['blur', 'change'],
          },
        ],
        checkStatus: [
          {
            required: true,
            message: '请选择审核意见',
            trigger: ['blur', 'change'],
          },
        ],
        urgentContactName: [
          {
            required: true,
            message: '请填写紧急联系人',
            trigger: ['blur', 'change'],
          },
        ],
        urgentContactTel: [
          {
            required: true,
            message: '请填写紧急联系电话',
            trigger: ['blur', 'change'],
          },
        ],
      },
      form: {
        type: '',
        startTime: '',
        endTime: '',
        reason: '',
        isTellParent: false,
        isLeaveSchool: true,
        status: '',
        statusLabel: '',

        checkName: '',
        checkStatus: '',

        urgentContactName: '',
        urgentContactTel: '',
      },
      // form

      // picker是否显示
      isTypeSelect: false,
      isStimeSelect: false,
      isEtimeSelect: false,
      isPassSelect: false,
      // isTypeSelect: false,

      // picker参数
      params: {
        year: true,
        month: true,
        day: true,
        hour: true,
        minute: true,
        second: false,
      },
      types: [
        {
          label: '事假',
          value: '0',
        },
        {
          label: '病假',
          value: '1',
        },
      ],
      status: [
        {
          label: '未审核',
          value: '0',
        },
        {
          label: '未通过',
          value: '1',
        },
        {
          label: '已完成',
          value: '2',
        },
        {
          label: '审核通过',
          value: '3',
        },
      ],
      advises: [
        {
          label: '未审核',
          value: '0',
        },
        {
          label: '未通过',
          value: '1',
        },
        {
          label: '已完成',
          value: '2',
        },
        {
          label: '同意',
          value: '3',
        },
      ],
      // picker参数

      action: '',
      vacation: null,
      vacationDetail: null,
    }
  },
  onLoad(params) {
    try {
      this.initData()

      let action = params.action
      this.action = action
      switch (action) {
        case 'add':
          this.title = '申请假条'
          this.submitTitle = '提交'

          // 初始化form
          let maxId = this.vacationDetail.maxId
          let tmp = this.$u.deepClone(this.vacationDetail.data.clone)
          tmp.id = ++maxId
          this.vacation = tmp
          this.freshForm(this.vacation)
          // 初始化form

          break
        case 'edit':
          this.title = '续假'
          this.submitTitle = '保存'

          let id = parseInt(params.id)
          if (!id) {
            this.error('程序出错', {
              back: true,
            })
            return
          }

          this.vacation = this.findVac(id)
          this.freshForm(this.vacation)

          console.log('[onLoad]vac:', this.vacation)
          break
      }
    } catch (e) {
      this.error(e, {
        back: true,
      })
    }
  },
  onReady() {
    this.$nextTick(function () {
      this.$refs.uForm.setRules(this.rules)
      // this.$refs.detailForm.setRules(this.detailFormRules);
    })
  },
  // watch: {
  // 	isPassed(n, o) {
  // 		if (n) {
  // 			this.isPassed = false

  // 		}
  // 	},
  // },
  methods: {
    // form
    confirmAction(action, data) {
      switch (action) {
        case 1:
          // 审核意见
          this.form.checkStatus = data[0].label
          break
      }
    },
    pickerAction(action) {
      switch (action) {
        case 1:
          // 审核意见
          this.isSelectAdvise = true
          break
      }
    },
    // form
    btnAction(action) {
      console.log(action)
      switch (action) {
        case 1:
          // 第一页
          this.currentIndex = 1
          break
        case 2:
          // 第二页
          this.currentIndex = 2
          this.isLookNext = true
          // this.$nextTick(function() {
          // 	this.$refs.detailForm.setRules(this.detailFormRules);

          // })
          break
      }
    },

    // 工具函数
    warning(msg, params = {}, callback = '') {
      this.toast(msg, 'warning', params, callback)
    },
    error(msg, params = {}, callback = '') {
      this.toast(msg, 'error', params, callback)
    },
    success(msg, params = {}, callback = '') {
      this.toast(msg, 'success', params, callback)
    },
    toast(msg, type, params, callback) {
      this.$nextTick(function () {
        this.$refs.uToast.show({
          title: msg,
          type,
          // url: '',
          params,
          callback,
        })
      })
    },
    // 工具函数

    getLastIdIndex() {
      this.freshVacDetail()
      let list = this.vacationDetail.data.list
      let len = list.length

      return {
        id: list[len - 1].id,
        index: len - 1,
      }
    },
    getIndex(id) {
      let res = -1
      this.vacationDetail.data.list.find((item, index) => {
        res = index
        return item.id == id
      })
      return res
    },
    findVac(id) {
      return this.vacationDetail.data.list.find((item) => {
        return id == item.id
      })
    },
    sortVacList(vacations) {
      // 根据时间排序
      // 开始时间

      vacations.sort((a, b) => {
        let aTime = this.$dayjs(a.detail.startTime, FORMATSECOND).unix()
        let bTime = this.$dayjs(b.detail.startTime, FORMATSECOND).unix()

        return bTime - aTime
      })

      return vacations
    },

    save() {
      this.vacationDetail.data.list = this.sortVacList(this.vacationDetail.data.list)

      if (this.vacationDetail.data.list.length >= MAXLENGTH) {
        let poped = this.vacationDetail.data.list.pop() // 弹出最后一个元素
        this.$log(poped)
      }

      uni.setStorageSync(VACATIONDETAIL, this.vacationDetail)
    },
    saveVac(index, vac) {
      this.vacationDetail.data.list[index] = vac
      this.save()
    },

    freshVacDetail() {
      this.vacationDetail = uni.getStorageSync(VACATIONDETAIL) // 更新数据
    },
    freshVac(form, type = '') {
      // 处理相同，这里不能像下面这样赋值，因为detail包含form
      // this.vacation.detail = this.form
      // 处理不相同
      // if (type == 'add') {  // 如果为新增，则需要手动赋值
      // 	this.vacation.detail.type = this.form.type
      // 	this.vacation.detail.startTime = this.form.startTime
      // 	this.vacation.detail.endTime = this.form.endTime
      // 	this.vacation.detail.reason = this.form.reason
      // 	this.vacation.detail.isTellParent = this.form.isTellParent
      // 	this.vacation.detail.isLeaveSchool = this.form.isLeaveSchool
      // }

      // 处理特殊，值引用
      this.vacation.detail.status = parseInt(this.form.status)

      return this.vacation
    },
    freshForm(vac) {
      this.$log(vac, 'vac')

      // 处理相同
      this.form = vac.detail
      // 处理不相同
      this.form.status = vac.detail.status
      switch (this.form.status) {
        case 0:
          this.form.statusLabel = '未审核'
          break
        case 1:
          this.form.statusLabel = '未通过'
          break
        case 2:
          this.form.statusLabel = '已完成'
          break
        case 3:
          this.form.statusLabel = '审核通过'
          break
      }
      // this.form.type = vac.detail.type
      // this.form.startTime = vac.detail.startTime
      // this.form.endTime = vac.detail.endTime
      // this.form.reason = vac.detail.reason
      // this.form.isTellParent = vac.detail.isTellParent
      // this.form.isLeaveSchool = vac.detail.isLeaveSchool
      return this.form
    },

    submit() {
      // [提交]
      let isPassed = false

      this.$refs.uForm.validate((valid) => {
        if (valid) {
          isPassed = true
          this.$log('验证通过', '验证')
          this.$log(this.form, 'form')

          // if (this.isInitDetialForm) {
          // 	this.$refs.detailForm.validate(valid => {
          // 		if (valid) {

          // 		} else {
          // 			console.log('验证失败');
          // 		}
          // 	});
          // }

          // this.$toast(this,'请填写下一步数据', 2)
        } else {
          console.log('验证失败')
        }
      })

      // if (!isPassed1 || !isPassed2) return
      if (!isPassed) return
      if (!this.isLookNext) return this.$toast(this, '请瞥一眼下一步', 3)

      const self = this
      switch (this.action) {
        case 'add':
          this.freshVac(this.form)
          // 修改数据，检查时间和申请时间
          this.$log(this.vacation, 'this.vacation-before')
          this.vacation = actionCalcTime(this.vacation)
          this.$log(this.vacation, 'this.vacation')

          this.vacationDetail.data.list.push(this.vacation)
          this.vacationDetail.maxId++
          this.save()

          uni.$emit('refreshVacDetailAction')

          this.success('创建成功，假条编号为：' + this.vacation.id, {}, () => {
            uni.navigateBack({})
          })

          console.log('vacationDetail:', this.vacationDetail)
          break
        case 'edit':
          console.log('[edited]vac:', this.vacation)
          let edittmp = this.freshVac(this.form)

          edittmp = actionCalcTime(edittmp)
          let editindex = this.getIndex(edittmp.id)

          debugger

          this.saveVac(editindex, edittmp)

          uni.$emit('refreshVacDetailAction')

          this.success('续假成功！', {}, () => {
            uni.navigateBack({})
          })
          break
      }
      function actionCalcTime(vac) {
        let times = calcTime(vac)

        vac.detail.checkTime = times.checkTime
        vac.detail.applyTime = times.applyTime
        return vac
      }

      function calcTime(vac) {
        if (!vac) return
        let startTime = vac.detail.startTime
        startTime = self.$dayjs(startTime, 'YYYY-MM-DD HH:mm:ss')

        let checkTime = startTime.subtract(getRandom(10, 30), 'minute').add(getRandom(0, 60), 'second')
        let applyTime = startTime.subtract(getRandom(30, 60), 'minute').add(getRandom(0, 60), 'second')

        return {
          checkTime: checkTime.format(FORMATSECOND, 'startTime'),
          applyTime: applyTime.format(FORMATSECOND, 'startTime'),
        }

        function getRandom(start, end) {
          return Math.floor(Math.random() * (end - 10) + start)
        }
      }
    },

    // picker时间和select回调
    typeConfirm(params) {
      // console.log('typeConfirm-params:', params);
      this.form.type = params && params[0] && params[0].label
    },
    sTimeConfirm(params) {
      this.form.startTime = this.formatDate(params)
    },
    eTimeConfirm(params) {
      // console.log('eTimeConfirm-params:', params);
      // this.form.endTime = params.year + '-' + params.month + '-' + params.day + ' ' + params.hour + ':' + params.minute + params.second

      let res = this.formatDate(params)
      // console.log('res:', res);
      this.form.endTime = res
    },
    statusConfirm(params) {
      this.form.statusLabel = params && params[0] && params[0].label
      this.form.status = params && params[0] && params[0].value
    },
    formatDate(params) {
      console.log('day:', params.day)

      const d = new Date(params.year, params.month - 1, params.day, params.hour, params.minute)
      return this.$dayjs(d).format(FORMATSECOND)
    },
    // picker时间和select回调

    typeSelect() {
      this.isTypeSelect = true
    },
    sTimeSelect() {
      this.isStimeSelect = true
    },
    eTimeSelect() {
      this.isEtimeSelect = true
    },

    commit() {
      console.log('请假成功')
      // 整合数据
      let currentVacInfo = {
        type: this.type,
        startTime: this.startTime,
        endTime: this.endTime,
        reason: this.reason,
        isTellParent: this.isTellParent,
        isLeaveSchool: this.isLeaveSchool,
      }

      console.log('currentVacInfo:', currentVacInfo)
      // 更新数据

      this.$Router.push('/pages/vacation/vacation')
    },
    confirm(e) {
      console.log('e:', e)
    },

    initData() {
      this.vacationDetail = uni.getStorageSync(VACATIONDETAIL)
      // console.log('vacationDetail:', this.vacationDetail);
    },
  },
}
</script>

<style lang="scss" scoped>
.apply-vacation {
  .content {
    .form-wrapper {
      padding: 0 30rpx 0;
      background-color: $wm-bg-fff;

      .switch {
        /* background-color: #f00; */
      }
    }

    .btn {
      position: absolute;
      bottom: 0;
      bottom: constant(safe-area-inset-bottom);
      bottom: env(safe-area-inset-bottom);
      left: 0;
      right: 0;
      font-size: 30rpx;
      height: 80rpx;
      line-height: 80rpx;
      color: $wm-bg-fff;
      background-color: $theme-color;
    }

    .pagenation {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 30rpx;

      button {
      }

      .next {
        margin-left: 30rpx;
      }
    }
  }
}
</style>
