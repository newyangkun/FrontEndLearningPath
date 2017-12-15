/* 模块引入 */
const express     = require('express');
const artTemplate = require('express-art-template');
const bodyParser  = require('body-parser');
const comment     = require('./commentTwo');


/* 实例化express（） */
const app = express();

/* artTemplate配置 */
app.engine('html', artTemplate);
/* body-parser配置 */
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
/* 公开网页依赖文件文件夹 */
app.use('/node_modules/', express.static('./node_modules/'));

/* 处理用户请求 */
app.get('/', (request, response) => {
  comment.findFile((error, data) => {
    if(error) {
      return response.send('数据读取错误，请重试');
    }
    response.render('index.html', {
      comments: data
    });
  })
});
app.get('/post', (request, response) => {
  response.render('post.html');
});
/* 处理post表单提交 */
app.post('/post', (request, response) => {
  /* 接收bodyParse处理post提交表单数据 */
  const formData = request.body;
  /* 验证表单数据 */
  if(!formData.name || !formData.name.length) {
    response.send('请填写用户名');
  }
  if(!formData.content || !formData.content.length) {
    response.send('请填写评论内容');
  }
  comment.saveFile(formData, error => {
    if(error) {
      return response.send('提交评论错误，请重试');
    }
  });
  response.redirect('/'); //重定向
});


/* 开启web服务，监听端口 */
app.listen('3200', () => {
  console.log('>>>>>>');
});