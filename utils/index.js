/*
 * @Author: jiangjin
 * @Date: 2021-10-13 20:58:05
 * @LastEditTime: 2021-10-13 20:58:06
 * @LastEditors: jiangjin
 * @Description:
 *
 */

// 作者：我是一个小哥哥
// 链接：https://juejin.cn/post/6844903967923650573
// 来源：稀土掘金
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
export function deepClone(obj) {
  if (obj === null) return null; //null 的情况
  if (obj instanceof RegExp) return new RegExp(obj); //正则表达式的情况
  if (obj instanceof Date) return new Date(obj); //日期对象的情况
  if (typeof obj == 'Function') return new function (obj) { }; //函数的情况
  if (typeof obj != "object") {
    //非复杂类型,直接返回 也是结束递归的条件
    return obj
  }
  //[].__proto__.constructor=Array()
  //{}.__proto__.constructor=Object()
  //因此处理数组的情况时,可以取巧用这个办法来new新对象
  var newObj = new obj.__proto__.constructor;
  for (var key in obj) {
    newObj[key] = deepClone(obj[key])
  }
  return newObj;
}
