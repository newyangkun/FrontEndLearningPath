(function (home, appHeader, appSide, heroList, newHero) {
  const template = `
<div>
  <app-header></app-header>
  <div class="container-fluid">
    <div class="row">
      <app-side></app-side>
        <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
          <!-- 页面内容区 -->
          <!-- #/ -->
          <!-- <home></home> -->

          <!-- #/heros -->
          <!-- <hero-list></hero-list> -->

          <!-- #/hero/new -->
          <!-- <new-hero></new-hero> -->

          <!-- #//heros/patch -->
          <!-- <patch-hero></patch-hero> -->

          <!-- 路由导航组件出口 -->
          <router-view></router-view>
        </div>
    </div>
  </div>
</div>`;
  window.App = {
    template,
    components: {
      home,
      appHeader,
      appSide,
      heroList,
      newHero,
      patchHero
    }
  };
})(home, appHeader, appSide, heroList, newHero);
