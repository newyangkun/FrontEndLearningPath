(function () {
  /* 申明模版常量 */
  const template = `
  <div class="col-sm-3 col-md-2 sidebar">
    <ul class="nav nav-sidebar">
      <router-link to="/" tag="li" exact>
        <a>首页</a>
      </router-link>
      <router-link to="/heros" tag="li">
        <a>英雄列表</a>
      </router-link>
      <router-link to="/test1" tag="li">
        <a>page3</a>
      </router-link>
      <router-link to="/test2" tag="li">
        <a>page4</a>
      </router-link>
    </ul>
  </div>`;

  /* 添加模版到页面顶级对象 */
  window.appSide = {
    template
  };
})();