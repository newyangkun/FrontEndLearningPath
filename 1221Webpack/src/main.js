/* 只加载 export default 成员 */
import fooDefault from  './foo';
/* 一次性加载所有 export 文件 */
import * as fooAll from './foo';
console.log(fooDefault);
console.log('------');
console.log(fooAll);
/* 载入CSS  */
import './index.css';
import './index.less';