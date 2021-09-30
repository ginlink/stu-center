<template>
	<view class="toast">
		<u-toast ref="uToast" />
		<u-top-tips ref="uTips"></u-top-tips>
		<!-- <u-modal v-model="modelShow" :content="modelContent" :title="modelTitle" :show-cancel-button="isShowCancel" @confirm="modelConfirm" @cancel="modelCancel"></u-modal> -->
		<u-modal v-model="modelShow" :content="modelContent" :title="modelTitle" @confirm="modelConfirm" @cancel="modelCancel"
		 :show-cancel-button="isShowCancel"></u-modal>
		 
		<nh-loadding ref='nhLoadding'></nh-loadding>
		
	</view>
</template>

<script>
	import NhLoadding from './nh-loadding.vue'
	export default {
		components: {
			NhLoadding,
		},
		data() {
			return {
				// model
				modelContent: '',
				modelTitle: '',
				modelShow: false,
				modelConfirm: () => {},
				modelCancel: () => {},
				isShowCancel: false,
				// model
			}
		},
		methods: {
			showToast(title, type = 'success', url = '', callback = '') {
				type = type || 'success'

				if(typeof(arguments[1])=='function'){
					type = 'success'
					callback = arguments[1]
				} 
				
				if (typeof(type) === 'number') {
					switch (type) {
						case 1:
							type = 'success'
							break
						case 2:
							type = 'error'
							break
						case 3:
							type = 'warning'
							break
					}
				}
				
				this.$refs.uToast.show({
					title,
					type,
					url,
					callback
				})
			},
			showTips(title, type, url) {
				this.$refs.uTips.show({
					title,
					type,
					url,
				})
			},
			showModel(content, confirm = '', cancel = '', title = '提示') {

				this.modelContent = content
				this.modelTitle = title

				this.modelShow = true
				this.isShowCancel = true
				if (confirm) this.modelConfirm = confirm
				if (cancel) this.modelCancel = cancel
			},
			toggleLoadding(title,status,zIndex){
				this.$refs.nhLoadding.show(title,status,zIndex)
			},
			
		}
	}
</script>

<style lang="scss" scoped>
</style>
