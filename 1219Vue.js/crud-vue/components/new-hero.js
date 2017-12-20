(function (axios) {
  /* 申明添加英雄模版常量 */
  const template = `
  <div>
    <h2 class="sub-header">添加英雄</h2>
    <form v-on:submit.prevent="addHero">
      <div class="form-group">
        <label for="name">英雄名称</label>
        <input
          type="text"
          class="form-control"
          id="name"
          v-model="heroName">
      </div>
      <div class="form-group">
        <label for="">性别</label>
        <div class="radio">
          <label>
            <input type="radio" name="gender" id="optionsRadios1" value="男" v-model="heroGender"> 男
          </label>
        </div>
        <div class="radio">
          <label>
            <input type="radio" name="gender" id="optionsRadios2" value="女" v-model="heroGender"> 女
          </label>
        </div>
      </div>
      <div class="form-group">
        <label for="name">英雄定位</label>
        <select class="form-control" v-model="heroType">
          <option value="0">请选择</option>
          <option v-for="item in heroList" v-bind:value="item.id">{{ item.name }}</option>
        </select>
      </div>
      <button type="submit" class="btn btn-success">提交</button>
      <a class="btn btn-danger" href="#/heros">取消</a>
    </form>
  </div>`;

  /* 添加英雄模版常量至页面顶级对象 */
  window.newHero = {
    template,
    data () {
      return {
        heroList   : [],
        heroName   : '',
        heroGender : '',
        heroType   : 0
      }
    },
    created () {
      /* 调用axios 发起get 请求, 获取英雄定位数据 */
      axios.get('http://localhost:3000/hero_types').then( response => {
        this.heroList = response.data;
      }).catch( error => {
        console.log(error)
      });
    },
    methods: {
      addHero() {
        const data = {
          gender: this.heroGender,
          name  : this.heroNam,
          type  : this.heroType
        }
        /* 使用axios 发送post 请求, 添加新的英雄数据 */
        axios.post('http://localhost:3000/heros', {
          name  : this.heroName,
          type  : this.heroType,
          gender: this.heroGender
        }).then( response => {
          if(response.status === 201) {
            this.$router.back();
          }
        }).catch( error => {
          console.log(error);
        });
      }
    }

  }
})(axios);