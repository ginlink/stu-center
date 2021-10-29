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

    <view class="content">
      <view class="bg1"></view>
      <view class="bg2"></view>
      <view class="card info-card" @click="changeInfo">
        <view class="info-avatar" @click.stop="chooseImage">
          <image :src="stuInfo.icon"></image>
        </view>
        <view class="info">
          <view class="name-yard">
            <text class="name">{{ stuInfo.name }}</text>
            <text class="yard">{{ stuInfo.yard }}</text>
          </view>
          <view class="class">
            <view class="class-icon">
              <image src="@/static/stu/bag.png"></image>
            </view>
            <view class="class-title">{{ stuInfo.grade }}</view>
          </view>
        </view>
        <view class="arrow-right">
          <u-icon name="arrow-right" size="24" :color="subColor"></u-icon>
        </view>
      </view>
      <view class="card" v-if="utilList.length > 0">
        <view class="title">常用工具</view>
        <view class="list">
          <view class="item" v-for="item in utilList" :key="item.id" @click="navClick(item)">
            <view class="item-img">
              <image :src="item.icon"></image>
            </view>
            <view class="item-title"> {{ item.title }} </view>
          </view>
        </view></view
      >
      <view class="card study-card" v-if="studyList.length > 0">
        <view class="title">学习日常</view>
        <view class="list">
          <view class="item" v-for="item in studyList" :key="item.id">
            <view class="item-img">
              <image :src="item.icon"></image>
            </view>
            <view class="item-title"> {{ item.title }} </view>
          </view>
        </view></view
      >
      <view class="card other-card" v-if="otherList.length > 0">
        <view class="title">其他</view>
        <view class="list">
          <view class="item" v-for="item in otherList" :key="item.id">
            <view class="item-img">
              <image :src="item.icon"></image>
            </view>
            <view class="item-title"> {{ item.title }} </view>
          </view>
        </view></view
      >
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
import item from './children/Menu'
import { StuInfoData } from '@/common/mock-data/vac.js'
import { STUINFO } from '@/common/const/index.js'
import backIconName from '@/static/home/home.png'

export default {
  components: {
    StuInfo,
    item,
  },
  onLoad(params) {
    this.initStuInfo()
  },
  created() {
    this.$http
      .get('/api/centermenu_v2')
      .then((res) => {
        const data = res.data.data ?? {}

        const utilList = data?.utilList
        const studyList = data?.studyList
        const otherList = data?.otherList

        console.log('[](data):', data)

        if (utilList) this.utilList = utilList.data?.slice(0, utilList.open_num)
        if (studyList) this.studyList = studyList.data?.slice(0, studyList.open_num)
        if (otherList) this.otherList = otherList.data?.slice(0, otherList.open_num)
      })
      .catch((err) => {
        console.log('err:func(created)(stu)', err)
      })
  },
  data() {
    return {
      otherList: [],
      studyList: [],
      utilList: [],

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
    navClick(item) {
      console.log('item:', item)
      if (item.url === '') return this.$toast(this, '该功能开发中...', 3)

      this.$utils.u_tips(item && item.url)
    },
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
      this.$utils.u_tips('/pages/console/console')
    },
  },
}
</script>

<style lang="scss" scoped>
.stu {
  min-height: calc(100vh - 88rpx);
  background-color: #f8f8f8;
  color: #8c8c8c;

  .content {
    padding: 40rpx 30rpx;
    position: relative;
    .bg1 {
      background-color: #fff;
      position: absolute;
      height: 300rpx;
      left: 0;
      right: 0;
      top: -30rpx;
      border-radius: 10%;
    }
    .bg2 {
      position: absolute;
      height: 272rpx;
      left: 0;
      right: 0;
      top: -30rpx;
      border-radius: 6%;
      /* background-image: linear-gradient(to bottom, #3c87f5, #66aaf8); */
      background-image: linear-gradient(to bottom, #1186ff, #78b9f9);
    }
  }

  .card {
    background-color: #fff;
    border-radius: 30rpx;

    padding: 32rpx 36rpx 60rpx;
    margin-top: 30rpx;
    &:first-child {
      margin-top: 0;
    }
    .title {
      font-size: 30rpx;
      font-weight: 500;
    }

    .list {
      display: flex;
      justify-content: flex-start;

      margin-top: 28rpx;
      .item {
        width: 102rpx;
        margin-left: 70rpx;
        &:first-child {
          margin-left: 0;
        }
        .item-img {
          width: 102rpx;
          height: 102rpx;
          image {
            width: 102rpx;
            height: 102rpx;
          }
        }
        .item-title {
          font-size: 24rpx;
          text-align: center;

          margin-top: 16rpx;
        }
      }
    }
  }

  .info-card {
    display: flex;
    align-items: center;
    justify-content: flex-start;

    padding-top: 38rpx;
    padding-bottom: 38rpx;
    position: relative;
    .info-avatar {
      width: 128rpx;
      height: 128rpx;
      image {
        width: 128rpx;
        height: 128rpx;
        border-radius: 50%;
      }
    }

    .info {
      margin-left: 40rpx;
      .name-yard {
        font-size: 34rpx;
        color: #535353;
        .yard {
          font-size: 24rpx;
          margin-left: 6rpx;
        }
      }
      .class {
        background-color: #e4f2fb;
        border-radius: 60rpx;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        width: fit-content;
        color: #548cf7;

        margin-top: 18rpx;
        padding: 0 30rpx;
        .class-icon {
          width: 28rpx;
          height: 28rpx;
          display: flex;
          align-items: center;
          image {
            width: 28rpx;
            height: 28rpx;
          }
        }
        .class-title {
          margin-left: 5rpx;
          font-size: 24rpx;
        }
      }
    }
    .arrow-right {
      flex: 1;
      text-align: right;
    }
  }
}
</style>
