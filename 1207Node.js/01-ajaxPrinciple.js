/* 构造ajax函数 */
function ajax(url, type, data, sync, success){
  let xhr = new XMLhttpRequest();
  xhr.open(type, url, sync);
  if(type === 'post' || type === 'POST') {
    xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
  }
  xhr.send(data);
  xhr.onreadystatechange = function () {
    if(xhr.readyState == 4) {
      let data = xhr.responseText;
      success(data);
    }
  }
}
/* 测试代码 */
ajax('/address/queryAddress', 'get', {id: 1}, 'true', function(data) {
  console.log(data);
});