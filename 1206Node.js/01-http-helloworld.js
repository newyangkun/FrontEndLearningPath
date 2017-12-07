/* 加载http核心模块 */
const http = require('http');
/* 创建服务器 */
const server = http.createServer();
/* 监听客户端request */
server.on('request', (request, Response) => {
  console.log('收到请求');
  request.write('日晚倦梳头');
  request.end();
});


/* 绑定端口,启动服务 */
server.listen('2030', function () {
  console.log('服务器已启动');
});