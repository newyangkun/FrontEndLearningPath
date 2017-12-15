/* 模块加载 */
const http = require('http');
const fs   = require('fs');

const artTemplate = require('art-template');  //模版渲染包
const mineHandle  = require('mime');

/* 创建服务 */
http.createServer((request, response) => {
  /* 获取请求方式&连接 */
  const url    = request.url;
  const method = request.method.toLowerCase();
  /* 根据请求类型和请求连接响应内容 */
  resText(url, method);
}).listen(3300, () => {
  console.log('>>>>>>')
});

/* 功能函数 */
function resText(url, method) {
  if(url === '/' && method === 'get') {
    const path = './views/index.html';
    /* 读取首页模版文件 */
    fs.readFile(path, (error, data) => {
      if(error) {
        return response.end('404 Not Found.');
      }
      /* 获取数据渲染模版 */
      handleHtml(data, './comment.json', (error) => {
        if(error) {
          response.end('404 Not Found.');
        }
      });  //模版渲染
      getMime(path);        //动态处理content-type
      response.end(pageFile);       //发送响应内容
    });
  }
  if(url === '/post' && method === "get") {
    const path = './views/post.html';
    /* 读取页面文件响应请求 */
    fs.readFile(path, (error, data) => {
      if(error) {
        return response.end('404 Not Found.');
      }
      getMime(path);
      response.end(data);
    });
  }
  if(url === '/post' && method === 'post') {
    /* 申明变量接收表单数据 */
    let formData = '';
    /* 监听request.data事件--->数据流开始传输 */
    request.on('data', dataFlow => {
      formData += dataFLow;
    });
    /* 监听request.end事件--->数据接收完毕 */
    request.on('end', () => {
      /* 校验表单 */
      console.log(formData)
    });
  }
}


/* 模版渲染函数 */
function handleHtml(data, dataPaht, callback) {
  /* 获取后台数据 */
  fs.readFileSync(dataPaht, (error, data) => {
    if(error) {
      return callback(error);
    }
    const info = JSON.parse(data);
  });
  /* 将二进制模版文件转换为字符串文件 */
  const temData  = data.toString();
  /* 调用模版引擎渲染页面 */
  const pageFile = artTemplate.render(temData, info);
  return pageFile;
}

/*动态处理content-type问题*/
function getMime(filePath) {
  console.log(filePath);
  return response.setHeader('content-type', mineHandle.getType(filePath));
}