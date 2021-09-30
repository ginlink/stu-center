/**
 * uni-app相关工具类
 * 功能：时间、提示、数组、字符串、Vue快捷、编码、
 *    
 * 使用方法：
 *    1.直接引入部分函数使用import {xxx} from ''
 *    2.或者默认导入可挂载到Vue原型上
 *      import utils from ''
 *      Vue.prototype.$utils = utils
 * @author nhh
 * @date 19/01/2021
 */

/************** [uniapp]提示、跳转 ********************/
/**
 * 跳转，并可选提示
 * 例:
 * this.Tips('/pages/test/test'); 跳转不提示
 * this.Tips({title:'提示'},'/pages/test/test'); 提示并跳转
 * this.Tips({title:'提示'},{tab:1,url:'/pages/index/index'}); 提示并跳转值table上
 * tab=1 一定时间后跳转至 table上
 * tab=2 一定时间后跳转至非 table上
 * tab=3 一定时间后返回上页面
 * tab=4 关闭所有页面跳转至非table上
 * tab=5 关闭当前页面跳转至table上
 * 
 * 参考：惠左惠右项目utils.js
 */
export function u_tips(opt, to_url) {
  if (typeof opt == 'string') {
    to_url = opt;
    opt = {};
  }

  let title = opt.title || ''
  let icon = opt.icon || 'none'
  let endtime = opt.endtime || 2000
  let success = opt.success
	let loadding = opt.loadding || false
	
	let data = opt.data || ''
	
	if(data){
		to_url += u_parseObj2Param(data)
	}
	
	console.log('to_url:', to_url);
	
	if(loadding){
		// 模拟加载等待
		endtime = 150
		title = title || '加载中'
		uni.showLoading({
			title: title,
		})
		setTimeout(()=>{
			uni.hideLoading()
			u_tips(to_url)
		},endtime)
		return
		// 模拟加载等待
	}

  if (title) uni.showToast({
    title: title,
    icon: icon,
    duration: endtime,
    success
  })
	

  if (to_url != undefined) {
    if (typeof to_url == 'object') {
      let tab = to_url.tab || 1,
        url = to_url.url || '';
      switch (tab) {
        case 1:
          //一定时间后跳转至 table
          setTimeout(function () {
            uni.switchTab({
              url: url
            })
          }, endtime);
          break;
        case 2:
          //跳转至非table页面
          setTimeout(function () {
            uni.navigateTo({
              url: url,
            })
          }, endtime);
          break;
        case 3:
          //返回上页面
          setTimeout(function () {
            // #ifndef H5
            uni.navigateBack({
              delta: parseInt(url),
            })
            // #endif
            // #ifdef H5
            history.back();
            // #endif
          }, endtime);
          break;
        case 4:
          //关闭当前所有页面跳转至非table页面
          setTimeout(function () {
            uni.reLaunch({
              url: url,
            })
          }, endtime);
          break;
        case 5:
          //关闭当前页面跳转至table页面
          setTimeout(function () {
            uni.redirectTo({
              url: url,
            })
          }, endtime);
          break;
      }
    } else if (typeof to_url == 'function') {
      setTimeout(function () {
        to_url && to_url();
      }, endtime);
    } else {
      //没有提示时跳转不延迟
      setTimeout(function () {
        uni.navigateTo({
          url: to_url,
        })
      }, title ? endtime : 0);
    }
  }
}
/************** 提示END ********************/

/************** 数组 ********************/
export function u_contactArray(list, sp) {
  // 连接数组，将list追加到sp中
  sp = sp || []
  if (typeof list != 'object') return [];
  // if (list.constructor != Array) return [];

  list.forEach(item => {
    sp.push(item)
  });

  return sp;
}
/************** 数组END ********************/


/************** 字符串 ********************/
export function u_trim(str) {
  // 去除字符串两端空格 [重复] str.trim()字符串有此方法
  if (str.constructor != String) return ''
  return String.prototype.trim.call(str);
}

/**
 * 解析js对象到url，最前面带?
 * @param {Object} param 要解析的对象
 * @param {Object} key 嵌套解析[可选]
 * @param {Object} encode 是否进行编码，默认true[可选]
 */
export function u_parseObj2Param(_param, _key, _encode) {
	if(_param.constructor != Object) return ''
	let _res = _RecParseObj2Param(_param, _key, _encode).substr(1)
	
	if(_res && _res != undefined + '=') return '?' + _res  // 格式化返回值
	else return ''
	
	
	// 函数会先提升
	function _RecParseObj2Param(param, key, encode){
		if (param == null) return '';
		var paramStr = '';
		var t = typeof(param);
		if (t == 'string' || t == 'number' || t == 'boolean') {
			paramStr += '&' + key + '=' + ((encode == null || encode) ? encodeURIComponent(param) : param);
		} else {
			for (var i in param) {
				var k = key == null ? i : key + (param instanceof Array ? '[' + i + ']' : '.' + i);
				paramStr += _RecParseObj2Param(param[i], k, encode);
			}
		}
		return paramStr;
	}
}
/************** 字符串END ********************/


/************** Vue快捷 **************/
/**
 * 解决vue对象动态属性更新不渲染问题 [无效，等待修复]
 * assign(that.config, 'name', {})
 * @param {*} that
 * @param {*} key
 * @param {*} value
 * @returns {*}  
 */
export function u_assign(that, key, value) {
  key = value  // 置空
  that = Object.assign({}, that)
}
/************** Vue快捷END **************/


/************** 时间 **************/
/**
 * 格式化时间
 * @param {*} fmt 格式'YYYY-mm-dd HH:MM'表示2020-06-06 19:45
 * @param {*} date
 * @returns {*}  
 * 如果对日期时间处理的需求较多, 推荐moment.js这个日期处理类库, 简单方便.
 */
export function u_dateFormat(fmt, date) {
  let ret;
  const opt = {
    "Y+": date.getFullYear().toString(),        // 年
    "m+": (date.getMonth() + 1).toString(),     // 月
    "d+": date.getDate().toString(),            // 日
    "H+": date.getHours().toString(),           // 时
    "M+": date.getMinutes().toString(),         // 分
    "S+": date.getSeconds().toString()          // 秒
    // 有其他格式化字符需求可以继续添加，必须转化成字符串
  };
  for (let k in opt) {
    ret = new RegExp("(" + k + ")").exec(fmt);
    if (ret) {
      fmt = fmt.replace(ret[1], (ret[1].length == 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")))
    };
  };
  return fmt;
}
/**
 * 指定生成时间对象
 * @param {*} option 生成规则{year:1990, month:3, day:3...}
 * @returns {*}  
 */
export function u_dateCreate(option) {
  let year = option.year || ''
  let month = option.month - 1 || '' // 月份从0开始
  let day = option.day || ''
  let hours = option.hours || ''
  let minutes = option.minutes || ''
  let seconds = option.seconds || ''
  let milliseconds = option.milliseconds || ''
  return new Date(year, month, day, hours, minutes, seconds, milliseconds);
}
export function u_getCurrentMonthSection() {
  // 获取当前月区间
  return getMonthSection(new Date())
}
export function u_getCurrentWeekSection() {
  // 获取当前周区间
  return getWeekSection(new Date())
}
export function u_getMonthSection(date) {
  // 获取给定时间的月区间
  let start = new
    Date(date.getFullYear(), date.getMonth(), date.getDate(), "00", "00", "00");
  // 第一天
  start.setDate(1);

  // 获取该月的最后一天
  let currentMonth = date.getMonth();
  let nextMonth = ++currentMonth;
  let nextMonthFirstDay = new Date(date.getFullYear(), nextMonth, 1, "23", "59", "59");
  let oneDay = 1000 * 60 * 60 * 24;

  let end = new Date(nextMonthFirstDay - oneDay);

  return { start, end }
}
export function u_getWeekSection(date) {
  // 获取给定时间的周区间
  let zero = new Date(date.getFullYear(), date.getMonth(), date.getDate(), "00", "00", "00");
  let full = new Date(date.getFullYear(), date.getMonth(), date.getDate(), "23", "59", "59");
  //今天是这周的第几天
  let today = date.getDay();
  //上周日距离今天的天数（负数表示）
  let stepSunDay = -today + 1;
  // 如果今天是周日
  if (today == 0) {
    stepSunDay = -7;
  }
  // 周一距离今天的天数（负数表示）
  let stepMonday = 7 - today;
  let start = new Date(zero.getTime() + stepSunDay * 24 * 3600 * 1000);
  let end = new Date(full.getTime() + stepMonday * 24 * 3600 * 1000);
  return { start, end }
}
/************** 时间END **************/


/*************** 编码 ****************/
// 小知识：
// 1.JSON.parse()能够自动解析url编码，但解析不了html编码(如&lt)
// 2.
/**
 * html编码
 * 例如：< 编码为 &lt
 * https://www.jb51.net/article/182368.htm
 * @param {*} str 
 */
export function u_htmlEncodeByRegExp(str) {
  var temp = "";
  if (str.length == 0) return "";
  temp = str.replace(/&/g, "&amp;");
  temp = temp.replace(/</g, "&lt;");
  temp = temp.replace(/>/g, "&gt;");
  temp = temp.replace(/\s/g, "&nbsp;");
  temp = temp.replace(/\'/g, "&#39;");
  temp = temp.replace(/\"/g, "&quot;");
  return temp;
}
/**
 * html解码
 * 例如：&lt 解码为 <
 * @param {*} str 
 */
export function u_htmlDecodeByRegExp(str) {
  var temp = "";
  if (str.length == 0) return "";
  temp = str.replace(/&amp;/g, "&");
  temp = temp.replace(/&lt;/g, "<");
  temp = temp.replace(/&gt;/g, ">");
  temp = temp.replace(/&nbsp;/g, " ");
  temp = temp.replace(/&#39;/g, "\'");
  temp = temp.replace(/&quot;/g, "\"");
  return temp;
}
export function u_removeHtmlTab(html) {
  // 去掉字符串中的html标签
  return html.replace(/<[^<>]+?>/g, '');
}
export function u_return2Br(str) {
  // 回车\r\n转为<br/>标签
  return str.replace(/\r?\n/g, "<br />");
}
/************** 编码END **************/

/************** 储存 **************/
export function u_setHistory(key,val){
	uni.setStorageSync(key,val)
}
export function u_getHistory(key){
	return uni.getStorageSync(key)
}
/************** 编码END **************/

export default {
  u_tips,
	u_parseObj2Param,  // js对象转url
  u_contactArray,
  u_trim,
	u_return2Br,
	u_dateFormat,
	u_setHistory,
	u_getHistory,
}
