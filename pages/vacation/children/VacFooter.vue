<template>
	<view class="" style="display: flex; position: absolute;bottom: 0;width: 100%;">
		<u-button :plain="true" :custom-style="customStyle" style="flex: 1;padding: 0;margin: 0 5px;" @click="$emit('action', 1)">续假</u-button>
		<u-button type="primary" style="flex: 1;padding: 0;margin: 0 5px;" @click="$emit('action', 2)">销假</u-button>
		<!-- background: #007AFF;color: #fff; -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				customStyle: {
					// marginTop: '20px', // 注意驼峰命名，并且值必须用引号包括，因为这是对象
					color: '#007AFF'
				}
			}
		},
		methods: {
			// 销假
			// reportBack() {
			// 	console.log('销假');
			// 	this.$Router.push('/pages/vacation/children/ReportBack')
			// },

			// reportContinue() {
			// 	// 跳出提示，显示信息，请点击假条信息进行续假
			// 	// this.
			// },
		}
	}
</script>

<style>
</style>
