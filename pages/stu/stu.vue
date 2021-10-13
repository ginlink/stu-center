<template>
  <view class="stu">
    <view class="navbar">
      <u-navbar
        title="学生中心"
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
    </view>

    <view class="stu-info">
      <stu-info style="" :item="stuInfo" @chooseImage="chooseImage" @changeInfo="changeInfo"></stu-info>
    </view>
    <view class="my-menu">
      <my-menu></my-menu>
    </view>

    <view class="plugin">
      <view class="popup">
        <u-popup mode="bottom" v-model="isChangePop">
          <view class="content">
            <u-form :model="form" ref="uForm">
              <view class="form-wrapper">
                <u-form-item required label="姓名" prop="name">
                  <u-input v-model="form.name" placeholder="请输入" />
                </u-form-item>
                <u-form-item required label="院系" prop="yard">
                  <u-input v-model="form.yard" placeholder="请输入" />
                </u-form-item>
                <u-form-item required label="班级" prop="grade">
                  <u-input v-model="form.grade" placeholder="请输入" />
                </u-form-item>
                <u-form-item label="专业" prop="major">
                  <u-input v-model="form.major" placeholder="请输入" />
                </u-form-item>
                <u-form-item label="性别" prop="sex">
                  <u-input type="select" v-model="form.sex" placeholder="请选择" @click="selSex = true" />
                  <u-select
                    v-model="selSex"
                    mode="single-column"
                    :list="sexes"
                    @confirm="confirm(1, $event)"
                  ></u-select>
                </u-form-item>
                <u-form-item label="民族" prop="nation">
                  <u-input v-model="form.nation" placeholder="请输入" />
                </u-form-item>
                <button class="btn" @click="submit">提交</button>
              </view>
            </u-form>
          </view>
        </u-popup>
      </view>
    </view>

    <n-toast ref="nToast"></n-toast>
  </view>
</template>

<script>
import StuInfo from './children/StuInfo'
import MyMenu from './children/Menu'
import { StuInfoData } from '@/common/mock-data/vac.js'
import { STUINFO } from '@/common/const/index.js'
import backIconName from '@/static/home/home.png'
export default {
  components: {
    StuInfo,
    MyMenu,
  },
  onLoad(params) {
    this.initStuInfo()
  },
  data() {
    return {
      backIconName,
      // popup
      menuShow: false,
      // popup
      // form
      isChangePop: false,
      selSex: false,
      sexes: [
        {
          label: '男',
          value: '1',
        },
        {
          label: '女',
          value: '2',
        },
      ],
      rules: {
        name: [
          {
            required: true,
            message: '请输入姓名',
            trigger: ['change', 'blur'],
          },
        ],
        yard: [
          {
            required: true,
            message: '请输入院系',
            trigger: ['change', 'blur'],
          },
        ],
        grade: [
          {
            required: true,
            message: '请输入班级',
            trigger: ['change', 'blur'],
          },
        ],
      },
      form: {
        name: '',
        yard: '',
        grade: '', // 班级
        major: '',
        sex: '',
        nation: '',
      },
      // form
      stuInfo: {},
    }
  },
  methods: {
    action(flag) {},
    confirm(flag, data) {
      if (flag == 1) {
        // 选择性别
        this.form.sex = data[0].label
        return
      }
    },
    submit() {
      let isPassed = false
      this.$refs.uForm.validate((valied) => {
        if (valied) return (isPassed = true)
      })

      if (!isPassed) return
      // 保存数据
      this.$log(this.form)
      this.$api.save(STUINFO, this.form)
      this.isChangePop = false

      this.stuInfo = this.$u.deepClone(this.form)
    },

    // 子组件
    changeInfo() {
      this.isChangePop = true

      this.$nextTick(function () {
        this.$refs.uForm.setRules(this.rules)
      })
    },
    // 子组件
    chooseImage() {
      let self = this
      uni.chooseImage({
        count: 1, //默认9
        sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
        sourceType: ['album'], //从相册选择
        success: function (res) {
          let tmp = res.tempFilePaths[0]
          self.$log(tmp)
          self.$toast(self, '更改头像成功！')

          // 写入本地
          self.stuInfo.icon = tmp
          self.$api.save(STUINFO, self.stuInfo)
          // console.log(JSON.stringify(res.tempFilePaths));
        },
      })
    },
    // 子组件
    initStuInfo() {
      let tmp = this.$api.get(STUINFO)
      if (tmp) {
        this.stuInfo = tmp
        this.form = this.$u.deepClone(tmp)
        return
      }

      this.stuInfo = StuInfoData
      this.form = this.$u.deepClone(StuInfoData)
    },
    customBack() {
      this.$utils.u_tips(
        {
          loadding: true,
        },
        '/pages/console/console'
      )
    },
  },
}
</script>

<style lang="scss" scoped>
.stu {
  min-height: calc(100vh - 88rpx);
  .my-menu {
    margin-top: 20rpx;
  }
}
</style>
