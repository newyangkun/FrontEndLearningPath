# javascript学习笔记

---

## 基本概念
- 数据类型
  - 五种简单数据类型`Undefined`,`Null`,`Boolean`,`Number`,`String`
    - Null: 被认为是一个空的对象引用指针(用typeof操作符检测返回'object');
    - Undefined: 派生自Null,(即(null==undefined)使'true');
    - Number: 数值转换注意
      ```
      //ECMAScript3解析为56(八进制);ECMAScript5解析为70(十进制)
      var num = parseInt("070");
      //针对这种情况,所以建议使用parseInt()第二个参数规定基数
      var num = parseInt("070", 8);	//数字将按八进制解析
      ```
    - String: 
      - 字符串是不可变的
      - 字符串转换中,toString()方法可以设置第二个参数(相似于parseInt()函数)
      - 字符串转换中,String()函数会在内部调用toString()方法(如果数据类型有),如果是'null'返回'null',如果是'undefined'返回'undefined'
      - 字符串转义符---> \
  - 一种复杂数据类型`Object`
    - 每个对象实例都具有下面的属相&方法 --->草稿
      - constructor: 保存着用于创建当前对象的函数
      - isPrototypeOf(Object): 检查传入对象是否是传入对象的原型
      - toString()
      - valueOf()

- 操作符补充
  - var aVariable = firstObject || secondObject
    变量aVariable将被赋予等号后面二个值中的一个.第一个值将优先赋予,第二个值负责在第一个不包含有效值得情况下为其提供后备值.
    - 加法("+")补充: `var str = 1 + '1';//值为'11'`
  ```
  var num1 = 1;
  var num2 = 2;
  var message1 = 'The sum of 5 and 10 is' + num1 + num2;
  var message2 = 'The sum of 5 and 10 is' + (num1 + num2);
  ```
  _上面的message1与message是二个完全的字符串_
  - 减法('-')补充: 在减法运算中字符串,布尔值,null,undefined会调用Number()函数得到结果后参与运算,与加法运算中的相区别

- 语句补充
  - label语句--->草稿
    在嵌套的条件语句中标记一个循环,然后由break或continue语句调用这个标记,从而指示程序中断循环或继续执行

## 变量与作用域

- 变量的复制
  - 复制一个基本类型变量,只是在栈内存中重新开辟一块空间储存这个复制的值;而复制的值和被复制的变量将不再有任何'关系'
  - 复制一个引用类型变量,其实是复制该变量指向对象的指针,此时这二个变量因为指针相同,所以指向的对象相同
- instanceof操作符
  instanceof用于检测基本类型的值时,始终都会返回false(因为基本类型不是对象);

## Array

- 数组排序
  - `reverse()`:返回一个倒序数组
  - `sort()`:调用`toString()`将数组的每个元素隐式转换为字符串,然后比较(所以'10'会排在'5'之前);然而`sort()`方法可以接受一个函数,用于比较哪个值在前面:
    ```javascript
    //当sort()方法调用此函数时将会按'严格'的升序排列数组
    function compare(item1, item2) {
    	if(item1 > item2) {
    		return 1;
    	} else if(item1 < item2) {
    		return -1;
    	} else {
    		return 0;
    	}
    }
    ```
- 数组替换
  - `splice()`方法可以用于: 删除,插入,替换数组元素
    - 指定二个参数: star, end 将会删除star-end(不包含end下标指向元素)之间的数组元素
    - 指定三||四个参数: star, length(要删除的长度), newItem;如果length为0,只插入元素;length为有效数值将删掉指定长度的数组元素后插入新的元素
- 数组迭代方法
  - every(): 运行一个给定函数(对数组的每一项), 只有当数组中每项的值都返回true,才能返回true
  - some(): 运行一个给定函数(对数组的每一项), 只要数组中任意项返回true,将返回true
  - filter(): 运行一个给定函数(对数组的每一项), 返回一个运行结果为true的项目组成的数组
  - forEach(): 运行一个给定函数(对数组的每一项); 返回值(undefined)--->等同于for循环迭代
  - map(): 运行一个给定函数(对数组的每一项), 返回每次函数调用结果组成的数组

## Date

- `getMonth()`返回日期中的月份--->从0开始
- `getDay()`返回日期中的星期--->从0开始


## RegExp --->未完待续

- 在javascript创建正则表达式
  ```javascript
  var example = / pattern / flage;
  // pattern: 正则表达式
  // flage: 正则表达式行为
  ```
- 正则表达式行为:
  - g: 全局模式--->表示正则表达式将会应用于所有字符串(而非在发现第一个匹配项是立即停止)
  - i: 表示不区分大小写
  - m: 多行模式
  - 以上的三种模式可以组合使用:
    ```javascript
    var pattern = /[a-z]/gi;
    /* 这里的正则表达式将匹配所有字母开头的字符串,且不区分大小写 */
    ```
- 元字符
  - 在javascript中使用正则表达式的元字符**用作其他用途**时,都需要转义.

## Function

- 函数申明与函数表达式的区别: 函数表达式会预解析(函数申明提升),而函数表达式只能等到解析器执行到代码所在行才能被执行--->所以不能在函数表达式前调用该函数

- 函数内部的特殊对象之一：arguments

  - arguments是一个**类数组对象**，包含着传入函数中的所有参数

  - arguments对象不是Array，除了长度（length）属性，不再具备任何Array对象的属性。但可以被转换成一个Array对象：

    > ```javascript
    > var args = Array.prototype.slice.call(arguments);
    > var args = [].slice.call(arguments);
    >
    > /* ECMAScript2015 */
    > const args = Array.from(arguments);
    > ```

    - 以上方法中，对参数使用slice()会阻止某些Javascript引擎优化(V8)。为了照顾性能，一般通过遍历arguments对象来构造新的数组


---
## javascript捨遗

- $(document).ready() & window.onload
  - window.onload 必须等到页面包括图片的所有元素加载完毕后才能执行--->多个编写只执行最后一个
  - $(document).ready() DOM结构绘制完毕后执行,不必等到具体内容加载完毕--->可以多个编写
    _简洁语法: $(function(){});_
  - window.onload 等同于$(window).load();

- forEach()方法对**数组**的每个元素执行一次提供的函数.
  - 提供的回调函数中接收三个参数: `currentValue`, `index`, `array`

- AJAX 
  - get请求得到缓存结果的方法：向URL地址中添加随机字符串（唯一ID）
  ```javascript
  xmlhttp:open('GET', 'example.php?x=' + Math.random(), true);
  xmlhttp:send();
  ```
  - POST请求注意事项：
  ```javascript
  xmlhttp:open('POST', 'url', true);
  xmlhttp:setRequestHeader('Content-type', 'application/x-www-form-urlencoded'); 
  xmlhttp:send('key=value$key=value');
  ```

  - ## 跨域

    - 由于浏览器的同源策略, 限制了以下的行为:

      > Cookie, LocalStorage和IndexDB无法获取
      >
      > DOM 和 JS 对象无法获取
      >
      > Ajax 请求不能发送

    - 跨域即: 域名, 协议, 端口号中任一项不同即视为跨域请求.

    - 跨域的节约方法:

      - Jsonp跨域(只能实现GET请求): 在HTML页面中通过相应的标签从不同域名下加载静态资源文件是被浏览器允许的, 所以我们可以通过动态创建 `script` 标签, 请求一个包含参数的网址实现通讯.

      ```javascript
      // 原生ajax 实现方式
      let script = document.createELement('script');
      script.src = 'http://example.com?username=siyue&callback=callback';
      document.body.appendChild(script);
      function callback(response) {
        console.log(response)
      }
      //jQuery 实现方式
      $.ajax({
        url: 'http://example.com',
        type: 'GET',
        dataType: 'jsonp',
        jsonpCallback: 'callback',
        data: {
          "username": "siyue"
        }
      })
      ```

      - window.name + iframe 跨域 & loaction.hash + iframe 跨域

      - CORS跨域

        CORS需要浏览器 和服务器的同时支持. 同时IE9以下不支持.

        CORS实现关键是服务器, 只要服务器实现了CORS接口, 就可以通过跨域(跨源通信).

        整个CORS通讯过程, 都是浏览器自动完成, 不需要用户参与. 对于开发者来说CORS通讯与同源AJAX通讯没有差别.代码完全一样. 浏览器一旦发现AJAX跨域请求, 就会自动添加一些附加打的头部信息(Origin字段)--->所以实现CORS通讯的关键是服务器端. 只要服务器实现了CORS接口, 就可以跨域通讯.

        ​

  ​



- 原型链和继承
  - ECMAScript 6 开始, [Prototype]可以用Object.getPrototypeOf()和Object.setPrototypeOf()访问其来访问Object原型, 等同于非标准的浏览器实现 `__proto__` 
  - 属性遮蔽(property shadowing).
  - ​