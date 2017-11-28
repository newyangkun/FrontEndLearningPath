# javascript学习笔记

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
