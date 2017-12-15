/* 模块引入 */
const express = require('express');
const artTemplate = require('express-art-template');
const bodyParser  = require('body-parser');
const comment = require('./comment');

/* 实例化express模块 */
const app = express();
/* 配置artTemplate模版引擎 */
app.engine('html', artTemplate);
/* 配置body-parser */
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
/* 开放公共文件夹 */
app.use('/node_modules/', express.static('./node_modules'));

/* 设置请求处理函数 */
app.get('/', (requset, response) => {
  comment.readFiles((error, comments) => {
    if(error) {
      return response.send('请求错误, 请刷新');
    }
    //--->EcmaScrip 6简洁语法==coments: comments;
    response.render('index.html', {
      comments
    });
  });
});
app.get('/post', (request, response) => {
  response.render('post.html');
});
app.post('/post', (request, response) => {
  /* 调用bodyParser处理post提交表单数据 */
  const formData = request.body;
  /* 验证表单数据 */
  if(!formData.name || !formData.name.length) {
    return response.send('请填写用户名');
  }
  if(!formData.content || !formData.content.length) {
    return response.send('评论内容不能为空');
  }
  /* 调用文件保存函数, 保存验证后的表单数据 */
  comment.saveFile(formData, error => {
    if(error) {
      return response.send('请求错误请重试');
    }
    /* 数据保存成功, 30重定向至首页 */
    response.redirect('/');
  });
});


/* 开启Web服务, 监听端口 */
app.listen('3200', () => {
  console.log('>>>>>>');
});