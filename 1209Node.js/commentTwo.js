/* 
*功能函数模块
* */
/* 依赖模块引入 */
const fs = require('fs');
/* 读取文件函数 */
exports.findFile = (callback) => {
  fs.readFile('./data.json', (error, data) => {
    if(error) {
      return callback(error);
    }
    const comments = JSON.parse(data.toString()).comments;
    callback(null, comments);
  });
}
/* 保存文件函数 */
exports.saveFile = (thisComment, callback) => {
  fs.readFile('./data.json', (error,data) => {
    if(error) {
      return callback(error);
    }
    let comments   = JSON.parse(data.toString()).comments;
    thisComment.id = comments[comments.length - 1].id + 1;
    comments.push(thisComment);
    const sqlData  = JSON.stringify({comments: comments}, null, 2);
    fs.writeFile('./data.json', sqlData, error => {
      if(error) {
        return callback(error);
      }
      callback(null);
    })
  })
}