/* 调用模块 */
const http = require('http');
const fs = require('fs');
const queryString = require('querystring');
/* 引入动态处理content-type包 */
const mime = require('mime');
/* 引入模版引擎 */
const template = require('art-template');
/* 数据文件 */
const dataPath = './comment.json';
/* 创建服务 */
http.createServer((request, response) => {
  /* 获取请求路径 */
  const url = request.url;
  /* 获取请求方法, 并转换为小写字母 */
  const method = request.method.toLowerCase();
  /* 根据url&metho判断用户请求文件 */
  if(method === 'get' && url === '/') {
    fs.readFile('./views/index.html', (error, data) => {
      if(error) {
        return response.end('404 Not Found.');
      }
      /* 服务器获取数据成功响应数据 */
      const pageData = data.toString();
      //调用函数获取数据文件,并渲染页面
      setHomePage(dataPath, (error, comments) => {
        if(error) {
          return response.end('404 Not Found.');
        }
        const pageHtml = template.render(pageData, comments);
        response.setHeader('content-type', 'text/html; charset=utf8');
        response.end(pageHtml);
      });
    });
  } else if(method === 'get' && url === '/post') {
    fs.readFile('./views/post.html', (error, data) => {
      if(error) {
        return response.end('404 Not Found.');
      }
      response.setHeader('content-type', 'text/html; charset=utf8');
      response.end(data);
    });
  } else if(method === 'post' && url === '/post') {
    /* 申明变量接收表单 */
    let formData = '';
    /* 监听data事件, 并将数据流拼接 */
    request.on('data', dataFlow => {
      formData += dataFlow;
    });
    /* 监听end事件--->表单数据接收完毕 */
    request.on('end', () => {
      /* querystring模块功能: 调用parse方法将字符串转换为对象 */
      const dataObject = queryString.parse(formData);
      /* 校验客户端提交的表单数据 */
      if(!dataObject.name || !dataObject.name.length) {
        response.setHeader('content-type', 'text/html; charset=utf8');
        return response.end('用户名不能为空');
      }
      if(!dataObject.content || !dataObject.content.length) {
        response.setHeader('content-type', 'text/html; charset=utf8');
        return response.end('内容不能为空');
      }
      /* 校验数据成功后将数据添加到数组中储存 */
      saveCommentData(dataPath, dataObject.name, dataObject.content, error => {
        /* 数据保存完毕,重定向至首页 */
        if(error) {
          return response.end('404 Not Found.')
        }
        response.statusCode = 302;
        response.setHeader('Location', '/');
        response.end();
      });
    });
  }else if(method === 'get' && (url.startsWith('/public/') || url.startsWith('/node_modules/'))) {
    // fs.readFile('./node_modules/bootstrap/dist/css/bootstrap.css', (error, data) => {
    //   if(error) {
    //     response.end('404 Not Found.');
    //   }
    //   response.setHeader('content-type', 'text/css; charset=utf8');
    //   response.end(data);
    // });
    /* 开放公开文件夹,方便页面调用 */
    const filePath = `.${url}`;
    fs.readFile(filePath, (error, data) => {
      if(error) {
        return response.end('404 Not Found.');
      }
      /* 使用mime扩展包,处理content-type问题 */
      response.setHeader('content-type', mime.getType(filePath));
      response.end(data);
    });
  }else {
    response.end('404 Not Found.');
  }
}).listen(2300, () =>{
  console.log('服务器正在运行>>>')
});

/* 功能函数 */
function setHomePage(path, callback) {
  fs.readFile(path, (error, data) => {
    if(error) {
      return callback(error);
    }
    const comments = JSON.parse(data.toString());
    callback(null, comments);
  });
}

function saveCommentData(path, name, content, callback) {
  fs.readFile(path, (error, data) => {
    if(error) {
      return callback(error);
    }
    const commentsData = JSON.parse(data.toString());
    const comData = commentsData.comments;
    const id = comData[comData.length - 1].id + 1;
    comData.push({
      "id": id,
      "name": name,
      "content": content
    });
    const commentsStr = JSON.stringify(commentsData);
    fs.writeFile(path, commentsStr, error => {
      if(error) {
        return callback(error);
      }
      callback(null);
    });
  });
}