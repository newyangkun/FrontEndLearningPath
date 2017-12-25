import Vue from 'vue'
import App from './App'
import router from './router'
/* *
* 引入公共资源 :
* bootstrap
* 字体图标文件
* less文件
* img文件
* */

// 依赖模块样式导入
import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.css'

// 自定义样式导入
import './assets/less/index.less'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
