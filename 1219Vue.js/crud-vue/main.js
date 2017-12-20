// 由于我们没有模块系统的支撑，所以把代码都写到匿名自执行函数中
// 为了让我们的模块看起来更清晰，所以建议把当前模块对外部成员的依赖都显示的声明一下
(function (router, App) {
  /* Vue 实例 */
  new Vue({
    template: '<App />',
    router,
    components: {
      App
    }
  }).$mount('#app')
})(router, App);