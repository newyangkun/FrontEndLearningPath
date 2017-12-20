(function (home, heroList, newHero, patchHero) {
  /* 在顶级对象中添加实例路由模块 */
  window.router = new VueRouter({
    linkActiveClass: 'active',    
    /* 添加路由模块 */
    routes: [
      {
        path: '/',
        component: home
      },
      {
        path: '/heros',
        component: heroList
      },
      {
        path: '/heros/new',
        component: newHero
      },
      {
        path: '/heros/patch/:id',
        component: patchHero
      },
      {
        path: '/test1',
        component: {
          template: '<p>这是一个测试</p>'
        }
      },
      {
        path: '/test2',
        component: {
          template: '<p>this is a test</p>'
        }
      }
    ]
  });
})(home, heroList, newHero, patchHero);