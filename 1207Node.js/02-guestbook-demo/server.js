/* 模块引入 */
const http     = require('http');
const fs       = require('fs');
const queryStr = require('querystring');
/* 第三方模块引入 */
const artTemplate = require('art-template');  //模版引擎
const mime        = require('mime');
/* 引入功能模块 */
const cs = require('./comment.js');


/* 创建服务器,监听请求事件 */
http.createServer((request, response) => {
  /* 获取请求链接&请求方式 */
  const url    = request.url;
  const method = request.method.toLowerCase();
  if(url === '/' && method === 'get') {
    /* 读取首页模版信息 */
    fs.readFile('./views/index.html', (error, data) => {
      if(error) {
        return response.end('404 Not Found...');
      }
      const template  = data.toString(); //转换二进制文件为字符串模版
      cs.readFiles((error, data) => {
        if(error) {
          return response.end('获取数据失败,请重试');
        }
        const indexHtml = artTemplate.render(template, {comments: data});
        response.setHeader('content-type', 'text/html; charset=utf8');
        response.end(indexHtml);
      });
      // fs.readFile('./comment.json', (error, data) => {
      //   if(error) {
      //     return response.end('404 Not Founf...');
      //   }
      //   const dataJson = JSON.parse(data.toString());
      //   const indexHtml = artTemplate.render(template, {comments: dataJson.comments});
      // });
    });
  }else if(url === '/post' && method === 'get') {
    fs.readFile('./views/post.html', (error, data) => {
      if(error) {
        return response.end('404 Not Found...');
      }
      response.setHeader('content-type', 'text/html; charset=utf8');
      response.end(data);
    });
  }else if(url === '/post' && method === 'post') {
    /* 申明变量接收数据流 */
    let formData = '';
    request.on('data', dataFlow => {
      formData += dataFlow;
    });
    request.on('end', () => {
      /* 数据接收完毕,使用querystring模块处理接收数据 */
      const tempData = queryStr.parse(formData);
      /* 判断 */ 
      if(!tempData.name && !tempData.name.length) {
        response.setHeader('content-type', 'text/plain; charset=utf8');
        response.end('用户名不能为空');
      }
      if(!tempData.content && !tempData.content.length) {
        response.setHeader('content-type', 'text/plain; charset=utf8');
        response.end('评论内容不能为空');
      }
      /* 读取数据文件, 添加新的表单数据 */
      cs.saveFile(tempData, (error) => {
        if(error) {
          return response.end('404 Not Found...');
        }
        response.statusCode = 302;
        response.setHeader('location', '/');
        response.end(); //没有响应数据也需要结束响应
      });
      // fs.readFile('./comment.json', (error, data) => {
      //   if(error) {
      //     return response.end('404 Not Found...');
      //   }
      //   const sqlData = JSON.parse(data.toString()).comments;
      //   const thisId  = sqlData[sqlData.length-1].id + 1;
      //   tempData.id   = thisId;  //在表单数据中添加标识id
      //   /* 将表单数据追加到sqlData中, 并储存到数据储存文件中 */
      //   sqlData.push(tempData);
      //   const sqlStr  = JSON.stringify({"comments": sqlData});
      //   fs.writeFile('./comment.json', sqlStr, error => {
      //     if(error) {
      //       return response.end('发表留言失败');
      //     }
      //     response.statusCode = 302;
      //     response.setHeader('Location', '/');
      //     response.end();
      //   });
      // });
    });
  }else if(method === 'get' && (url.startsWith('/public/') || url.startsWith('/node_modules'))) {
    /* 申明变量--->保存拼接的相对路径 */
    const filePath = `.${url}`;
    fs.readFile(filePath, (error, data) => {
      if(error) {
        return response.end('404 Not Found...');
      }
      response.setHeader('content-type', mime.getType(filePath));
      response.end(data);
    });
  }
}).listen('3100', () =>{
  console.log('>>>>>>');
});