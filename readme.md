Git学习记录
===
1. Git 安装 : [Git for Windows](http://msysgit.github.com/)
2. Git 配置项 : 
	- 安装Git后,第一配置用户信息
		```
		$ git config --global user.name "yourname"
		$ git config --global user.email name@example.com
		```
		*"--global" : 表示本计算机所有Git仓库都会使用这个配置*
	- 设置默认编辑器(用来输入额外信息)--->默认为系统默认编辑器
	- 差异分析工具(一般不用设置,除非有特殊要求)
		```
		$ git config --global merge.tool kdiff3
		```
	- 配置查询 : 
		```
		$ git config --list //查询所有配置
		$ git config user.name	//查询特定配置(如user.name)
		```
3. Git 获取帮助
	git上的各式工具使用帮助方法
		```
		$ git help <verb>	//方法一
		$ git <verb> --help	//方法二
		$ man git-<verb>	//方法三
		```
4. Git 版本库创建
	- 创建好版本库文件夹后,右键,选择```Git bash here```
	```
	$ git init

