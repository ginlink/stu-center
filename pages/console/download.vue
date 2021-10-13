<!--
 * @Author: jiangjin
 * @Date: 2021-10-09 15:09:00
 * @LastEditTime: 2021-10-13 17:12:00
 * @LastEditors: jiangjin
 * @Description: 
 * 
-->


<template>
	<view class="download">

		<view class="navbar">
			<u-navbar title="下载" :border-bottom="false" titleColor="#303133" titleBold>
				<!-- #ifndef MP -->
				<view slot="right">
					<!-- 右侧菜单功能 -->
					<!-- <wechat-menu class="wechat-menu-wrapper" @menu="menuShow=true" @close="action(2)"></wechat-menu> -->
					<wechat-menu class="wechat-menu-wrapper"></wechat-menu>
				</view>
				<!-- #endif -->

			</u-navbar>
		</view>

		<view class="plane">
      <view class="code-wrapper">
        <view class="code-text">安卓客户端</view>
        <view class="code-text">扫码下载：</view>
        <view class="code">
          <image :src="androidAppCodeUrl"></image>
        </view>
      </view>
      <view class="url">点击下载：<a :href="androidAppUrl" target="__blank">{{androidAppUrl}}</a></view>
		</view>

		<n-toast ref='nToast'></n-toast>

	</view>
</template>

<script>
	export default {
		components: {
		},
		data() {
      return {
        androidAppUrl: '',
        androidAppCodeUrl: '',
      }
		},
    created(){
      this.fetchUrl()
    },
		methods: {
      fetchUrl(){
        this.$http.get('/api/download').then(res => {
          const data = res.data.data ?? {}

          this.androidAppUrl = data.android_app_url ?? ''
          this.androidAppCodeUrl = data.android_app_code_url ?? ''
        }).catch(err => {
          console.log('err:func(download)(fetchUrl)', err)
        })
      }
    }
	}
</script>

<style lang="scss" scoped>
	.download {
		min-height: calc(100vh - 88rpx);
		.my-menu{
			margin-top: 20rpx;
		}
		
    .plane{
      padding: 30rpx;

      .code-wrapper{
        .code{
          display: flex;
          justify-content: center;
          margin-top: 15rpx;
          image{
            width: 240rpx;
            height: 240rpx;
          }
        }
      }
      .url{
        margin-top: 60rpx;
      }
    }
	}
</style>
