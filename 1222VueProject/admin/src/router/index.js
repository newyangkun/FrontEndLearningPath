/* 核心依赖 */
import Vue from 'vue'
import Router from 'vue-router'
/* 模块引入 */
import Home from '../components/Home/Home'
import Login from '../components/Login/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
