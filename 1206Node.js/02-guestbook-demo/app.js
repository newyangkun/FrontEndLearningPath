/* 加载 http 核心模块 */
const http = require('http');
/* 加载文件读取模块 */
const fs = require('fs');
/* 创建服务器, 获得Sever实例 */
const server = http.createServer();
/* 
*监听客户端'request'请求, 设置请求处理函数 
*回调函数参数一: 请求对象(客户端对象);
*回调函数参数二: 响应对象(发送响应数据);
*/
server.on('request', function (request, response) {
  /* request请求对象的属性一: url 可以获取当前客户端的请求路径 */
  /* console.log(request.url); ---> 测试代码*/
  const url = request.url;
  /* 设置'/'为请求首页 */
  if (url === '/') {
    fs.readFile('./views/index.html', function (error, data) {
      if (error) {
        return response.end('404 Not Fond.');
      }
      response.setHeader('Content-Type', 'text/html; charset=utf-8');
      response.end(data);
    });
  } else if(url === '/post') {
    fs.readFile('./views/post.html', function (error, data) {
      if (error) {
        return response.end('404, Not Found.');
      }
      response.setHeader('Content-Type', 'text/html; charset=utf-8');
      response.end(data);
    });
  } else if(url === '/node_modules/bootstrap/dist/css/bootstrap.css') {
    fs.readFile('./node_modules/bootstrap/dist/css/bootstrap.css', function (error, data) {
      if (error) {
        return response.end('404 Not Found.');
      }
      response.setHeader('Content-Type', 'text/css; charset=utf-8');
      response.end(data);
    });
  }
});

/* 绑定端口号, 并启动服务器 */
server.listen(3100, function () {
  console.log('服务器开启');
})
