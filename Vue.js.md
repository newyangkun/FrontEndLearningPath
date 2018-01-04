#  Vue.js笔记

## 基础语法

- **实例：**

  ```html
  <div id="app">
    {{ message }}
  </div>
  ```

  ```javascript
  var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!'
    }
  });

  /* ====== or ====== */

  var app = new Vue({
    data: {
      message: 'Hello Vue!'
    }
  }).$mount('#app');
  ```
  ​

- **简单文本数据绑定**

  最常见的数据绑定形式: `{{}}` 语法(即"Mustache"语法)。此时，绑定的数据对象发生了改变，插值出的内容也会更新。
  但是通过`v-once` 指令可以执行一次性的插值（该节点上的所有数据绑定都将是一次性的）。

  - 上面的`Mustache` 语法会将数据解析为普通文本。在需要输出`HTML` 代码时，需要调用`v-html` 指令:

    ```html
      <span>{{ htmltext }}</span>
      <span v-html="htmltext"></span>
    ```

    ​	下面是渲染数据：

    ```javascript
    htmltext: '<h1>这是测试</h1>'
    ```
    *需要注意的是任意渲染HTML可能会导致XSS攻击事件。*

  同时，`Mustache` 语法还提供了Javascript表达式支持。但是，每个绑定都只能包含**单个表达式** 。并且模版表达式都将被放在沙盒中执行，只能访问全局变量的一个白名单^1^ ，如Math和Data，而访问不到自定义全局变量。

  ​

- **指令**

  指令是带有`v-` 前缀的特殊属性。用于表达式的值改变时，产生连带影响，响应式的作用于DOM

  *一些指令还能够接收一个参数，用于响应式的更新HTML属性*

  > 指令修饰符： 以半角句号`.` 指明的特殊后缀。英语指出指令应该以特殊的方式绑定。
  >
  > 指令缩写：     Vue为二个常用的指令提供了特定缩写--->`v-on` 和`v-bind` 分别是 `@` 和`:`  

  ​

- **计算属性**

  > 对于任何复杂逻辑，都应当使用**计算属性**

  ```html
  <div id="app">
    <p>{{ text }}</p>
    <p>{{ reversetext }}</p>
  </div>
  ```

  ```javascript
  new Vue({
    el: '#app',
    data: {
      text: 'Hello Vue'
    },
    computed: {
      reversetext: function () {
       // 这里的this 指向vue实例. 所以在这里不要使用es6箭头函数
        return this.message.split('').reverse().join('');
      }
    }
  });
  ```

  <u>在这里的计算属性在效果上等同于方法(methods), 但在本质上计算函数是基于它们的依赖进行缓存的. 只有当依赖值发生变化时, 它们才会重新计算求值. 而方法则是每次请求都会重新计算求值. 所以在特殊需求不希望有缓存的情况下, 可以使用方法代替计算属性.</u>



- **DOM元素属性与样式绑定**

  属性绑定

  - 对象语法: 对象语法可以用来动态切换class

    ```html
    <div v-bind:class="{ active: isActive, 'text-danger': isDanger }"></div>
    <script>
      //--- 省略实例 ---//
      data: {
        isActive: true,
        isDanger: false
      }
    </script>
    ```

  - 数组语法:

    ```html
    <div v-bind:class="[one, two]"></div>
    <script>
      //--- 省略实例 ---//
      data: {
        one: active,
        two: danger
      }
    </script>
    ```

    *数组语法还提供三元表达式方式动态绑定class*

  样式绑定

  ```html
  <!-- 对象语法 -->
  <div v-bind:style="{ color: activeColor, fontSize: size + 'px' }"></div>
    <!-- 或者 -->
  <div v-bind:class="styleObject"></div> <!-- 这里将直接调用Vue实例中data里的styleObject对象 -->

  <div v-bind:style="['styelOne', 'styleTwo']"></div>
  ```

  ​

- **条件渲染**

  v-if...v-else-if...v-else

  - 简单语法

    ```html
    <span v-if="result">Yes</span><span v-else>No</span>
    ```

  - 区块元素的条件渲染

    > 在切换多个元素时, 使用 `template` 元素包裹, 并在上面使用 `v-if` , 最终的渲染结果将不包含 `template` 元素.

    ```html
    <template v-if="result">
      <ul>
        <li>...</li>
        <li>...</li>
        <li>...</li>
        <li>...</li>
      </ul>
    </template>
    ```


  v-show

  - 简单语法

    ```html
    <p v-show="result">...</p>
    ```

  **v-if** 与 **v-show**

  > `v-if` 是真实的条件渲染, 会确保在切换过程中条件块内的事件监听器和子组件适当的被销毁和重建.

  > `v-if` 也是**惰性**的: 只有当条件为真是才开始渲染条件块. 但是 `v-show` 则无视初始条件的渲染元素, 而后根据条件真假,基于CSS进行display切换

  > 一般来说, `v-if` 比较适合用在条件改变较少的的案例中, 而 `v-show` 则在频繁切换渲染的案例中使用



- **列表渲染**

  `v-for` 用来对一组**数组**进行**列表**渲染.

  `v-for` 支持二个参数: 当前项与当前项索引.

  `v-for`  拥有对父作用域属性的完全访问权限.












---

### Vue捨遗

- `bind` 钩子函数不能操作 `focus` 操作
- ​渲染完毕但还是报错