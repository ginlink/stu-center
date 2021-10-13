/*
 * @Author: jiangjin
 * @Date: 2021-09-30 16:55:30
 * @LastEditTime: 2021-10-13 22:18:58
 * @LastEditors: jiangjin
 * @Description: 
 * 
 */
// router/modules/home.js
const home = [{
	//注意：path必须跟pages.json中的地址对应，最前面别忘了加'/'哦
	path: '/pages/index',
	name: 'index',
	meta: {
		title: '入口',
	},
}, {
	//注意：path必须跟pages.json中的地址对应，最前面别忘了加'/'哦
	path: '/pages/console/console',
	name: 'console',
	meta: {
		title: '首页',
	},
},
{
	path: '/pages/stu/stu',
	name: 'stuCenter',
	meta: {
		title: '学生中心',
	},
}, {
	path: '/pages/console/download',
	name: 'download',
	meta: {
		title: '下载',
	},
}, {
	path: '/pages/vacation/vacation',
	name: 'vacation',
	meta: {
		title: '列表',
	},
}, {
	path: '/pages/setting/index',
	name: 'setting',
	meta: {
		title: '设置',
	},
}, {
	path: '/pages/record/index',
	name: 'record',
	meta: {
		title: '更新日志',
	},
}
]
export default home
