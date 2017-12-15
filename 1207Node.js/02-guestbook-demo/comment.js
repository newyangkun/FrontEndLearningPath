/* 
 * 功能代码封装
 */
/* 模块引入 */
const fs = require('fs');

/* 文件读取模块 */
exports.readFiles = (callBack) => {
  fs.readFile('./comment.json', (error, data) => {
    if(error) {
      return callBack(error);
    }
    const comments = JSON.parse(data.toString()).comments;
    callBack(null, comments);
  })
}
/* 文件保存模块 */
exports.saveFile = (thisComment, callBack) => {
  fs.readFile('./comment.json', (error, data) => {
    if(error) {
      return callBack(error);
    }
    let comments   = JSON.parse(data.toString()).comments;
    thisComment.id = comments[comments.length - 1].id + 1;
    comments.push(thisComment);
    const sqlData  = JSON.stringify({comments: comments});
    fs.writeFile('./comment.json', sqlData, error => {
      if(error) {
        return callBack(error);
      }
      callBack(null);
    });
  });
}