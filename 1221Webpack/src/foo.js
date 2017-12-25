// module.exports = function () {
//   console.log('这是测试');
// }
/* 
* 这里的export default相当于上面的module.exports
* 一个模块只能包含一个 export default, 多余的会报错
 */
export default function () {
  console.log('这是测试');
}

const foo = 'this';
const boo = 'is';
const too = 'a';
const fot ='test';

/* 
* 一次性导出指定的成员
* 不能带 = 
* 导出成员必须有内部变量引用
* */
export {
  foo,
  boo,
  too,
  fot
}

