<template>
	<!-- 申请假条 -->
	<view class="apply-vacation">
		<view class="navbar">
			<u-navbar back-text="申请假条" :border-bottom="false">
				<!-- #ifndef MP -->
				<view slot="right">
					<!-- 右侧菜单功能 -->
					<wechat-menu class="wechat-menu-wrapper"></wechat-menu>
				</view>
				<!-- #endif -->

			</u-navbar>
		</view>

		<view class="content">
			<view class="form-wrapper">
				<u-form :model="form" ref="uForm">
					<u-form-item :label-width="labelWidth" label="请假类型" prop="type">
						<u-input v-model="form.type" type="select" placeholder="请选择" @click="isTypeSelect=!isTypeSelect" />
					</u-form-item>
					<u-form-item :label-width="labelWidth" label="开始时间" prop="startTime">
						<u-input v-model="form.startTime" type="select" placeholder="请选择" @click="isStimeSelect=!isStimeSelect" />
					</u-form-item>
					<u-form-item :label-width="labelWidth" label="结束时间" prop="endTime">
						<u-input v-model="form.endTime" type="select" placeholder="请选择" @click="isEtimeSelect=!isEtimeSelect" />
					</u-form-item>
					<u-form-item label-position="top" :label-width="labelWidth" label="请假原因" prop="reason">
						<u-input v-model="form.reason" type="textarea" :height="textareaHeight" auto-height />
					</u-form-item>
					<u-form-item :label-width="labelWidth" label="是否告知家长" prop="isTellParent">
						<u-switch class="switch" v-model="form.isTellParent"></u-switch>
					</u-form-item>
					<u-form-item :label-width="labelWidth" label="是否离开学校" prop="isLeaveSchool">
						<u-switch v-model="form.isLeaveSchool"></u-switch>
					</u-form-item>
				</u-form>
				<u-button class="btn" @click="submit">提交</u-button>
			</view>
		</view>

		<!-- <view style="padding: 0 10px;background: #fefefe;">
			<apply-item @click.native="typeSelect" :title="'请假类型'" :value='type' :totalStyle="{padding: '5px 0'}"></apply-item>
			<apply-item @click.native="sTimeSelect" :title="'开始时间'" :value='startTime' :totalStyle="{padding: '5px 0'}"></apply-item>
			<apply-item @click.native="eTimeSelect" :title="'结束时间'" :value='endTime' :totalStyle="{padding: '5px 0'}"></apply-item>

			<u-form>
				<view class="" style="border-bottom: 1px solid #EEEEEE;font-size: 36rpx;">
					请假原因
				</view>
				<u-form-item>
					<textarea v-model="reason" style="" placeholder="请输入请假原因 (必填)" />
					</u-form-item>
				<u-form-item>
					是否告知家长
					<u-switch slot="right" v-model="isTellParent"></u-switch>
				</u-form-item>
				<u-form-item>
					是否离校
					<u-switch slot="right" v-model="isLeaveSchool"></u-switch>
				</u-form-item>
			</u-form>
		</view>
		
		<button type="" style="width: 100%;background: #3685F1;color: #FFFFFF;position: absolute;bottom: 0;" @click="commit">提交</button> -->


		<!-- 三个选择器 -->
		<u-select v-model="isTypeSelect" mode="single-column" :list="types" @confirm="typeConfirm"></u-select>
		<u-picker v-model="isStimeSelect" mode="time" :params="params" @confirm="sTimeConfirm"></u-picker>
		<u-picker v-model="isEtimeSelect" mode="time" :params="params" @confirm="eTimeConfirm"></u-picker>

	</view>
</template>

<script>
	import {
		VacationInfo
	} from '@/res.js'
	import ApplyItem from './ApplyItem'
	export default {
		components: {
			ApplyItem
		},
		data() {
			return {
				// form
				textareaHeight: 100,
				labelWidth: '30%',
				rules: {
					type: [{
						required: true,
						message: '请选择假条类型',
						trigger: ['blur', 'change']
					}],
					startTime: [{
						required: true,
						message: '请选择开始时间',
						trigger: ['blur', 'change']
					}],
					endTime: [{
						required: true,
						message: '请选择开始时间',
						trigger: ['blur', 'change']
					}],
					reason: [{
						required: true,
						message: '请选择开始时间',
						trigger: ['blur', 'change']
					}],
					reason: [{
						required: true,
						message: '请选择开始时间',
						trigger: ['blur', 'change']
					}],
				},
				form: {
					type: '',
					// type: {
					// 	label: '',
					// 	value: '',
					// },
					startTime: '',
					endTime: '',
					reason: '',
					isTellParent: false,
					isLeaveSchool: true,

				},
				// form

				// type: '事假',
				// startTime: '请选择',
				// endTime: '请选择',
				// reason: '',
				// isTellParent: false,
				// isLeaveSchool: true,

				// picker是否显示
				isTypeSelect: false,
				isStimeSelect: false,
				isEtimeSelect: false,
				// isTypeSelect: false,

				// picker参数
				params: {
					year: true,
					month: true,
					day: true,
					hour: true,
					minute: true,
					second: true
				},

				types: [{
						label: '事假',
						value: '0'
					},
					{
						label: '病假',
						value: '1'
					},
				]
			}
		},
		created() {
			console.log('ApplyVacation');
		},
		onReady() {
			this.$refs.uForm.setRules(this.rules);
		},
		methods: {
			submit() {
				// [提交]
				this.$refs.uForm.validate(valid => {
					if (valid) {
						console.log('验证通过');
					} else {
						console.log('验证失败');
					}
				});
			},

			// picker时间和select回调
			typeConfirm(params) {
				console.log('typeConfirm-params:', params);
				this.form.type = params && params[0] && params[0].label
				// this.form.type.value = params && params[0] && params[0].value

			},
			sTimeConfirm(params) {
				console.log('sTimeConfirm-params:', params);
				this.form.startTime = params.year + '-' + params.month + '-' + params.day + ' ' + params.hour + ':' + params.minute +
					':' + params.second
			},
			eTimeConfirm(params) {
				console.log('eTimeConfirm-params:', params);
				this.form.endTime = params.year + '-' + params.month + '-' + params.day + ' ' + params.hour + ':' + params.minute +
					':' + params.second
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
				console.log('请假成功');
				// 整合数据
				let currentVacInfo = {
					type: this.type,
					startTime: this.startTime,
					endTime: this.endTime,
					reason: this.reason,
					isTellParent: this.isTellParent,
					isLeaveSchool: this.isLeaveSchool,
				}

				console.log('currentVacInfo:', currentVacInfo);
				// 更新数据

				this.$Router.push('/pages/vacation/vacation')
			},
			confirm(e) {
				console.log('e:', e);
			}
		}
	}
</script>

<style lang="scss" scoped>
	.apply-vacation {
		.content {
			.form-wrapper {
				padding: 0 30rpx 60rpx;
				background-color: $wm-bg-fff;

				.btn {
					color: $wm-bg-fff;
					background-color: $theme-color;
					margin-top: 30rpx;
				}

				.switch {
					/* background-color: #f00; */
				}
			}
		}
	}
</style>
