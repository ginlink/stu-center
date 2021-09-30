// 菜单假数据
const myMenu = {
	code: 1,
	data: {
		list: [{
			id: 1,
			icon: '/static/img/stuCenter/vacation.svg',
			title: '请销假',
			url: '/pages/vacation/vacation',
		}, {
			id: 2,
			icon: '/static/img/stuCenter/write.svg',
			title: '健康晨报',
			url: '',
		}, {
			id: 3,
			icon: '/static/img/stuCenter/write.svg',
			title: '健康日报',
			url: '',
		}, {
			id: 4,
			icon: '/static/img/stuCenter/apply.svg',
			title: '返校申请',
			url: '',
		}, {
			id: 5,
			icon: '/static/img/stuCenter/apply.svg',
			title: '离校申请',
			url: '',
		}, {
			id: 6,
			icon: '/static/img/stuCenter/notify.svg',
			title: '通知公告',
			url: '',
		}, {
			id: 7,
			icon: '/static/img/stuCenter/help.svg',
			title: '使用帮助',
			url: '',
		}]
	}
}

let nowTime = new Date().getTime()

const Vacation = {
	code: 1,
	data: {
		list: [{
			id: 1,
			type: 0, // 类型
			startTime: '2020-10-01 12:00',
			endTime: '2020-10-01 20:00',
			totalHour: 6, // 共计时间
			// status: true, // 审批情况
			status: false, // 审批情况
			reason: '买东西',
			isTellParent: false,
			isLeaveSchool: true,
		},{
			id: 2,
			type: 0, // 类型
			startTime: '2020-11-01 12:00',
			endTime: '2020-11-01 20:00',
			totalHour: 6, // 共计时间
			// status: true, // 审批情况
			status: false, // 审批情况
			reason: '买东西',
			isTellParent: false,
			isLeaveSchool: true,
		},{
			id: 3,
			type: 1, // 类型
			startTime: '2020-09-01 12:00',
			endTime: '2020-09-01 20:00',
			totalHour: 8, // 共计时间
			status: true, // 审批情况
			// status: false, // 审批情况
			reason: '走动',
			isTellParent: false,
			isLeaveSchool: true,
		},
		]
	}
}

const VacationDetailInfo = {
	code: 1,
	data:{
		list:[
			{
				id: 1,
				check:{
					checkName:'王同斌',
					checkTime:'2020-10-11 10:00',
					status: 3,  // 状态：0未审核 1未通过 2已完成 3通过
				},
				detail:{
					applyTime: '2020-10-11 08:00:11',
					startTime: '2020-10-11 08:00:11',
					endTime: '2020-10-11 08:00:11',
					type: 0,
					reason: '',
					isTellParent: false,
					isLeaveSchool: true,
					urgentContactName: '马云',
					urgentContactTel: '13837487347',
					other: null,
				}
			},
			{
				id: 2,
				check:{
					checkName:'王同斌',
					checkTime:'2020-10-11 10:00',
					status: 0,  // 状态：0未审核 1未通过 2已完成 3通过
				},
				detail:{
					applyTime: '2020-10-11 08:00:11',
					startTime: '2020-10-11 08:00:11',
					endTime: '2020-10-11 08:00:11',
					type: 0,
					reason: '',
					isTellParent: false,
					isLeaveSchool: true,
					urgentContactName: '马云',
					urgentContactTel: '13837487347',
					other: null,
				}
			},
			{
				id: 3,
				check:{
					checkName:'王同斌',
					checkTime:'2020-10-11 10:00',
					status: 3,  // 状态：0未审核 1未通过 2已完成 3通过
				},
				detail:{
					applyTime: '2020-10-11 08:00:11',
					startTime: '2020-10-11 08:00:11',
					endTime: '2020-10-11 08:00:11',
					type: 0,
					reason: '',
					isTellParent: false,
					isLeaveSchool: true,
					urgentContactName: '马云',
					urgentContactTel: '13837487347',
					other: null,
				}
			},
		]
	}
}

const VacationDetailInfo1 = {
	code: 1,
	createTime: '202020020200202',
	list: [{
			text: '请假开始时间:',
			value: '2021-01-12 10:00:00'
		},
		{
			text: '请假结束时间:',
			value: '2021-01-12 10:00:00'
		},
		{
			text: '请假类型:',
			value: '事假'
		},
		{
			text: '请假原因：',
			value: '身体不适'
		},
		{
			text: '是否告知家长：',
			value: '否'
		},
		{
			text: '是否需要离校：',
			value: '是'
		},
		{
			text: '紧急联系人:',
			value: '马云'
		},
		{
			text: '紧急联系人电话:',
			value: '132838238823'
		},
		{
			text: '附件：无',
			value: ''
		},
	]
}

const VacationCondition = {
	conditionMan: '王同斌', // 审核人
	conditionAgree: '同意', // 审核意见
	conditionTime: '2020202020202', // 审核时间
}

const VacationInfo = {
	code: 1,
	data: {
		type: 0,
		startTime: '2021-01-12 10:00:00',
		endTime: '2021-01-12 10:00:00',
		reason: '身体不适',
		isTellParent: '否',
		isLeaveSchool: '是',
		isLeaveSchool: '是',
	},
}

export {
	myMenu,
	Vacation,
	VacationDetailInfo,
	VacationCondition,
	VacationInfo,
}
