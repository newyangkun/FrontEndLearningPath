# javascript 模块化编程之 require.js用法

## 背景 :

> 浏览器在加载 js 文件时, 会暂时停止网页渲染, 加载的文件越多, 网页失去响应的事件越长. 其次, 由于 js 文件之间存在依赖关系, 因此必须严格保证加载顺序. 当依赖关系变得复杂, 代码的编写和维护都将变得困难.

而 require.js 的诞生就是为了解决这二个问题:

- 实现js文件的异步加载, 避免网页失去响应.
- 管理模块之间的依赖性, 便于代码的编写与维护.

## require.js 的使用

- 加载 :

  ```html
  <script src="**/require.js"></script>
  <script src="**/require.js"></script>
  ```

- 为保证 require.js 的顺利加载也可以这样写

  ```html
  <script src="**/require.js" defer async="true"></script>
  <script src="**/require.js"></script>
  ```

  > async 属性表明这个文件需要异步加载, 避免网页失去响应. 但是 IE 浏览器不支持这个属性. 所以使用defer 用于兼容 IE 浏览器.


- 上面的代码中, main.js就是我们的入口函数. 可以在里面使用 `require()` 函数.

  > `require()` 函数有二个参数数. 第一个参数是一个数组. 表示依赖的模块. 第二个参数是一个回调函数, 当前面指定的模块都加在成功后, 将被调用. 加载的模块会以参数形式参入该函数. 从而回调函数内部就可以使用这些模块

