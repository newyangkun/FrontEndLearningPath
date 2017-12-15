# Node.js捨遗
## 1209 
- express-art-template需要通过配置才能使用
  ```javascript
  app.engine('html', atrTemplate);
  ```
- `JSON.stringify`格式化json字符串：
  ```javascript
  JSON.stringify({**:**}, null, 2);
  ``` 