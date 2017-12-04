/* 加载http模块 */
const http = require('http');
const fs = require('fs');
/* 创建服务器,得到服务器实例对象 */
let serve = http.createServer();
/* 监听请求事件 */
serve.on('request', function (request, response) {
  console.log('客户端发起请求');
  //结束响应--->可以发送数据
  //response.end(); //--->没有发送任何数据
  //response.end('hello world');
  fs.readFile('./test.txt', function (err, data) {
    response.end(data);
  })
});
/* 启动服务器,设置监听端口号 */
serve.listen(8030, function () {
  console.log('8030端口正在使用');
});