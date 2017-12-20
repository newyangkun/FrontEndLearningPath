(function (axios) {
  /* 申明页面内容模版常量 */
  template = `
  <div>
    <h2 class="sub-header">英雄管理</h2>
    <div class="table-responsive">
      <a class="btn btn-success" href="#/heros/new">添加</a>
      <table class="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>姓名</th>
            <th>定位</th>
            <th>性别</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="hero in heros">
            <td>{{ hero.id }}</td>
            <td>{{ hero.name }}</td>
            <td>{{ hero.type }}</td>
            <td>{{ hero.gender }}</td>
            <td>
              <a href="javascript:;" v-on:click="reviseHero(hero.id)">编辑</a>
              <a href="javascript:;" v-on:click="deleteHero(hero.id)">删除</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>`;

  /* 将模版常量添加到页面顶级对象 */
  window.heroList = {
    template,
    /* 调用生命钩子函数, 在构建DOM树之前发起XMLHttpRequest请求, 获取英雄列表数据 */
    created () {
      this.getHeros();
    },
    data () {
      return {
        heros: []
      }
    },
    methods: {
      getHeros() {
          // 使用axios发送get请求
        axios.get('http://localhost:3000/heros').then( heroRes => {
          axios.get('http://localhost:3000/hero_types').then( typeRes => {
            const herosData = heroRes.data;
            const typeData  = typeRes.data
            // 循环匹配英雄定位
            herosData.forEach( item => {
              // for(let i = 0; i < typeData.length; i ++) {
              //   if(item.type == typeData[i].id) {
              //     item.type = typeData[i].name
              //   }
              // }
              /* 也可以使用数组的find 方法 */
              item.type = typeData.find( type => type.id === item.type ).name
            });
            // Array.prototype.push.apply(this.heros, herosData);
            this.heros = herosData;
          }).catch( error => {
            console.log(error);
          });
        }).catch( error => {
          console.log(error);
        });
      },
      deleteHero (index) {
        /* 调用asios , 发起delete 请求, 删除当前行数据 */
        axios.delete(`http://localhost:3000/heros/${index}`).then( response => {
          if(response.status === 200) {
            this.getHeros();
          }
        }).catch( error => {
          console.log(error);
        })
      },
      reviseHero (index) {
        window.location.href = `#/heros/patch/${index}`;
      }
    }
  };
})(axios);