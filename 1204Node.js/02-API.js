/* 引入文件操作API */
let fs = require('fs');
let poetry = '背灯和月就花阴,已是十年踪迹十年心';


/* 输出代码 */
//文件读取方法
fs.readFile('./test.txt', function (err, data) {
  //默认输出的数据是二进制数据
  if(err){
    return console.log('文件读取错误');
  }
  console.log(data);
  console.log(data.toString());
});
//文件写入方法
fs.appendFile('./helloWorld.txt', 'helloWorld', function () {
  console.log('追加成功');
});
fs.appendFile('./helloWorld.txt', poetry, function () {
  console.log('添加成功');
})
