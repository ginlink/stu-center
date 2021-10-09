/*
 * @Author: jiangjin
 * @Date: 2021-09-30 16:55:30
 * @LastEditTime: 2021-10-09 15:10:57
 * @LastEditors: jiangjin
 * @Description: 
 * 
 */
// router/modules/home.js
const home = [{
	//注意：path必须跟pages.json中的地址对应，最前面别忘了加'/'哦
	path: '/pages/console/console',
	aliasPath: '/', //对于h5端你必须在首页加上aliasPath并设置为/
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
}
]
export default home
