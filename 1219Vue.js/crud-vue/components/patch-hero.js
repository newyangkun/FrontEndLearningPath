(function (axios) {
  /* 申明修改英雄模版常量 */
  const template = `
  <div>
    <h2 class="sub-header">编辑英雄</h2>
    <form v-on:submit.prevent="reviseHero(heroInfo.id)">
      <div class="form-group">
        <label for="name">英雄名称</label>
        <input
          type="text"
          class="form-control"
          id="name"
          v-model="heroInfo.name">
      </div>
      <div class="form-group">
        <label for="">性别</label>
        <div class="radio">
          <label>
            <input type="radio" name="gender" id="optionsRadios1" v-model="heroInfo.gender" :checked="heroInfo.gender === '男'" value="男"> 男
          </label>
        </div>
        <div class="radio">
          <label>
            <input type="radio" name="gender" id="optionsRadios2" v-model="heroInfo.gender" :checked="heroInfo.gender === '女'" value="女"> 女
          </label>
        </div>
      </div>
      <div class="form-group">
        <label for="name">英雄定位</label>
        <select class="form-control">
          <option value="0">请选择</option>
          <option
          v-for="item in typeList"
          v-bind:value="item.id"
          v-bind:selected="heroInfo.type === item.id">{{ item.name }}</option>
        </select>
      </div>
      <button type="submit" class="btn btn-success">修改</button>
      <a class="btn btn-danger" href="#/heros">取消</a>
    </form>
  </div>`;

  /* 添加模版到页面顶级对象 */
  window.patchHero = {
    template,
    created () {
      this.getType();
      this.getHeros();
    },
    data () {
      return {
        typeList: [],
        heroInfo: {},
      }
    },
    methods: {
      getType () {
        axios.get('http://localhost:3000/hero_types').then( response => {
          this.typeList = response.data;
          console.log(this.typeList)
        }).catch( error => {
          console.log(error)
        });
      },
      getHeros () {
        /* 获取英雄Id */
        const hash   = window.location.hash;
        const index  = hash.lastIndexOf('/');
        const heroId = hash.substr(index + 1);
        /* 根据Id获取英雄信息 */
        axios.get(`http://localhost:3000/heros/${heroId}`).then( response => {
          this.heroInfo = response.data;
          console.log(this.heroInfo)
        })
      },
      /* 修改英雄 */
      reviseHero (id) {
        /* 发送axios 请求, 修改Heros 信息 */
        axios.patch(`http://localhost:3000/heros/${id}`, this.heroInfo).then( response => {
          console.log(response);
          if(response.status === 200) {
            this.$router.back();
          }
        }).catch( error => {
          console.log(error);
        })
      }
    }
  }
})(axios);