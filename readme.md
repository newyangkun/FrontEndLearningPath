Git学习笔记_1
===
1. ### Git 安装 : [Git for Windows](http://msysgit.github.com/)
2. ### Git 配置项 : 
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
3. ### 获取帮助
	git上的各式工具使用帮助方法
		```
		$ git help <verb>	//方法一
		$ git <verb> --help	//方法二
		$ man git-<verb>	//方法三
		```
4. ### Git 版本库创建
	- 方法一 : 在资源管理器中创建好需要的版本库文件夹后,右键,选择**Git bash here**在打开的git命令窗口键入```$ git init```,创建成功后将提示```Initialized empty Git repository in your repository path```表示版本库创建完成.
	- 方法二 : 打开git bash,使用Git命令在指定目录下创建自己的文件版本库(repository).
		```
		$ cd your repository path	//进入文件夹命令
		$ mkdir	your repository name //创建文件夹命令
		$ pwd	//检查路径命令---> 非必要,用于确认创建路径==预期
		$ git init	//创建Git仓库--->成功会返回信息同方法一
		```
5. ### 添加文件/项目到Git Repository
	- #### 两步提交文件or项目 
		- 执行```$ git add example.md```将文件添加到仓库暂存区(可以使用add . 添加整个文件目录)
		- 使用```git commit```将文件提交到仓库
			```
			$ git commit -m "提交文件说明" //等同于代码注释
			```
		_命令行```$ git status```查看当前仓库状态,```$ git diff ***```查看仓库文件修改内容_
		_提交修改文件,同样可以使用:_
			```
			$ git add
			$ git commit -m "文件修改说明"
			```
6. ### 版本退回```$ git reset```
	- 在执行版本退回命令时,指定退回版本.在Git中```HEAD```代表当前版本,上一版使用```HEAD^```表示.
		```
		$ git reset --hard HEAD^
		```
	- 退回版本隔代过多可以使用(如上100版):```HEAD~100```
	- 退回后,可以通过```$ git reflog```(查询操作记录),找到某一后代版本"commit id",退回到后代版本
		```
		git reset --hard 2343224	//hard后面插入commit id
		```
	- 在工作区文件遭遇非预期修改后可以使用```git checkout -- filename```将工作区文件退回到暂存区版本or版本库版本
		①: 文件在被修改前没有add到暂存区--->工作区文件将回到版本库版本
		②: 文件在被修改前已经add到暂存区--->工作区文件将回到暂存区版本
		③: **文件在被修改后同时添加到了暂存区,可以使用```$ git reset HEAD filename```(这里的命令行没有--hard)把暂存区修改撤销掉,再checkout**
	- _文件删除_
		命令行```$ rm filename```可以删除工作区指定文件.但是版本库内文件不会被删除.此时: 1--->我要同时删除版本库内文件--->执行```$ git rm filename```并```git commit``` || 2--->误操作--->执行```$ git checkout -- filesname```撤销操作.

# Git学习笔记_2
===
1. SSH Key创建
	Git Bash中执行```$ ssh-keygen -t rsa -C "example@mail.com"```
2. 在github中绑定id_rsa.pub(ssh key公钥)

# Git冷知识积累

- 执行命令行提示```too many argument```时,可以命令行用""包裹后运行.
- add . & add -A & add -u区别
	1. git add -A	保存所有的增删改
	2. git add .	保存新的添加和修改，但是不包括删除
	3. git add -u	保存修改和删除，但是不包括新建文件.

- Git提交文件必须先将文件的增删改查添加到仓库暂存区中(```$ git add ***```)后才能通过```$ git commit```提交

