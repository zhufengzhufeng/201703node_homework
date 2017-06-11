### node
git 的使用方式
- 命令行
- 图形化界面
### 如果初始化错误，需要删除一下git
rm -rf .git 删除git(慎重使用)
pwd 打印当前工作目录
cd 改变目录
### 配置当前用户信息
```
git config --global user.name 'yanminlin'
git config --global user.email 2232119834@qq.com
git config --list 查看配置列表
mkdir aaa 创建文件夹
cd aaa 进入文件夹aaa上
git init初始化当前文件目录
ls -a 查看目录中的文件
touch index.txt 创建文件
```
```
cat index.txt 查看文件中内容
```
```
vi index.txt 编辑文件，按入a 或i进行编辑
```
w 保存  q 退出    q!强制退出
esc + :wq 保存并退出
### git 区域化分
- 工作区
- 暂存区
- 历史区（文件不会丢失）
工作区提交到暂存区:git add -A
暂存区提交到历史区：git commit -m "message"
git status 查看文件状态
git log 查看提交日志

### 三个区的比较及撤销操作
git diff 默认比较的是工作区和暂存区
git diff master 工作区和历史区比较
git diff --cached 暂存区和历史区的比较
git checkout index.txt(从暂存区返回到工作区，在写错的情况下用)
git reset --hard id号 历史区回到工作区版本
git reflog 查看所有的日志
git reset HEAD index.txt 将这个文件回到上一次的暂存区 

###分支操作
git branch查看分支
git branch 分支名 创建分支
git checkout 分支名 进入切换分支
git branch -D 分支名 删除分支

###创建并切换分支
```
git checkout -b dev
```
>默认创建的分支和创建之前的分支是一模一样的
###分支提交后
- 提交到某个分支上，这个文件就归属于提交的分支，一般情况下，开发项目，都会有一个主分支，在这个主分支上拉取自己的小分支进行开发。如果发生错误不会影响主分支
```
git merge dev 合并分支到主干
```
###分支操作步骤总结
步骤：1、创建并进入分支 2、在分支里新建文件touch
3、在分支中把文件提交到暂存区add
4、从暂存区提交到库 commit
5、进入主支合并分支 git merge 分支名
6、删除分支 git branch -D 分支名

将本地一个仓库推送到远程仓库
本地有内容，远程没有内容
建立一个文件夹(文件夹是空的默认不让提交)
初始化git(如果想保留空文件夹增加.gitkeep文件即可)
>操作git文件永远在根目录下

- 增加一个README文件
echo '内容'>>READ.md
- 增加一个忽略文件 torch .gitignore
gitignore在这个文件中写入的内容，均不会提交
- 提交到历史区
git add 
git commit -m
- 链接远程仓库 git remote add origin https://github.com/yanminlin999/first.git
- 推送到git
git push -u origin master
### 上传到git步骤
1、新建文件夹
2、初始化仓库
3、在文件夹新建文件
4、把内容追加到README.md
echo "# first" >> README.md
5、把README.md推到暂存区
6、再推到历史区
7、和远程仓库建立链接
git remote add origin 自己仓库地址
8、git push -u origin master 传上去
### 发布静态页面
- 如果想让github提供“静态网站”，可以发布到gh-pages的分支上
git checkout -b gh-pages
git add .
git commit -m "ok"
git push origin gh-pages

- 在settings中找到新的网址，观看页面，如果不是index.html需要手动添加后缀
查看链接情况 git remote -v
git clone 地址  默认建立链接
git add .
git commit -m ""
git push origin master

- 组员fork组长代码
git clone 到自己的文件下
和组长建立联系 git remote add teamleader 地址
放入自己的文件提交 add和 commit命令
拉取组长的最新代码 git pull teamleader master
提交到自己的仓库上 git push origin master
发送合并请求

###node 系列
配置环境 
计算机—>属性—>高级—>环境变量—>path

###异步编程 回调函数
能用异步（非阻塞）就不要用同步
### nodejs是单线程 java多线程
多线程 感觉像同时干很多事（一边看电视 一边睡觉），只是切换上下文的速度比较快，多线程可以使用多核
### 进程>线程
nodejs不能再一个进程中开多个线程，开多个进程（子进程）
h5里的webwork,开辟一个新的线程
###全局对象
在node中可以直接使用的都叫做全局对象
在服务端 都挂在了global上
在文件中直接使用当前的this不是global
自己申明的变量，不会挂载在global上
如果没有var变量会声明在global上

- process 进程
buffer 缓存 内存
console log dir warn info error (time timeend 计算时间差)
vscode 调错
- setTimeout 异步的，这里的this指向的都是自己
事件环 是基于事件驱动的
setImmediote 立即 是异步方法
- process
console.log(process);
获取环境变量
区分本地开发环境和线上开发环境
设置环境变量set NODE_ENV='developement' 
console.log(process.env)


