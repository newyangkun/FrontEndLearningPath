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
	- 加法("+")补充: `var str = 1 + '1';	//值为'11'`
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









---

## javascript捨遗

- $(document).ready() & window.onload
	- window.onload 必须等到页面包括图片的所有元素加载完毕后才能执行--->多个编写只执行最后一个
	- $(document).ready() DOM结构绘制完毕后执行,不必等到具体内容加载完毕--->可以多个编写
		_简介语法: $(function(){});_
	- window.onload 等同于$(window).load();

