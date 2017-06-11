##### git使用方式：
- 命令行
- 图形化界面 sourceTree
- 初始化git管理范围
##### 初始化 git管理的范围
- cd 改变目录
- pwd 打印当前工作目录
#####  配置当前用户信息：
- 可以用户名采用 github账号和邮箱 没有配置过的使用commit
```
git config --global user.name 名字      用户名
git config --global user.eamil 邮箱号
git config -list --查看目录(配置)
cd Desktop
git init 把这个目录变成Git可以管理的仓库（初始化git）
```
###### git  命令
- mkdir xxx创建新的文件夹
- cd 打开什么目录
- ls查看目录中的文件
  ls -a查看目录中的详细文件
- touch XXX创建文件（可以创建隐藏文件），默认空文件
- cat XXX查看文件中的内容
- vi xxx编辑文件
进入插入模式：
i-编辑内容
按esc+ :q 退出
q! 强制退出
esc+:wq保存内容
:set Number 查看目录
- rm -rf  .git(文件夹名) 如果初始化错误，需要删除一下 .git  慎重用 rm -rf *这样会让电脑瘫痪。


###### git有那几个区？
> 有工作区  暂存区/过渡区   历史区/版本库
工作区  -->git add .  --->暂存区--->git commit -m xxx  --->历史区

历史区/版本库 ：放在里面内容不会丢失
- git status 创建文件后，查看文件状态
clear 当前的一幕清空
- git log 查看当前日志（能看出几次提交）
- git reflog 查看所有的日志

###### git 比较git 三个区的不同 git diff
-  git diff   默认比较的是工作区和暂存区
- git diff master(master 不一定 看后面的（）) 工作区和历史区比较
- git diff --cached 暂存区和历史区的比较

###### 撤销
vi xxx 编辑
- git checkout .  把暂存区的文件拉到工作区（写错的情况下）
- git rest --hard  版本ID 把历史区的拉到工作区（版本错的情况下） 硬回滚
- git reflog 查看所有的日志

###### 
- git reset HEAD .  返回到上一次暂存区中---->git checkout .把暂存区的文件拉到工作区
###### 分支
- git branch 查看分支
- git branch xxx(分支名) 创建分支
- git checkout xxx（分支名） 切换分支
- git branch -D xxx(分支名) 删除分支
- git checkout -b xxx（分支名） 创建并切换分支
默认创建出来的分支和创建之前的是一模一样的
- 分支提交后，提交到某个分支上，这个文件就归属于提交的分支，一般情况下，开发项目，都会一个主分支，在这个主分支上拉取自己的小分支进行开发，如果发生错误不会影响主分支
- git merge xxx(分支名) 合并分支 必须在大分支上合并小分支
- git branch -D xxx 

###### 可以联合提交，只限提交过文件
```
git commit -a -m 'hello'

```
##### 解决冲突
去掉>>>>>>========<<<<<<<保留最终结果
git branch
- ls
- git checkout -b dev
- vi index.js 
- git commit -a -m 'uglify'
- cat index.js 
- clear
- git checkout master
- cat index.js
- vi index.js
- git commit -a -m 'add handsome'
- clear
- cat index.js
- git merge dev
- git commit -a -m 'result'
- git log
- clear
-  history > 1.txt

###### 发布静态页
- 如果想让github提供‘静态’网站，可以发布到gh-pages的分支上
```
git checkout -b gh-pages
git add .
git commit -m 'ok'
git push origin gh-pages（提交的分支不在master）
```
在settings中找到新的网址，观看页面，如果不是index.html 需要手动添加后缀名 
git remote -v 查看链接情况 
#####fork


组员提交作业
- git remote add xxx 建立联系
- git remote -v 查看链接情况
- git remote rm xxx删除联系
- git add .
- git commit -m 'ok' 
- git pull xxx(组长) master 
- git push origin master
- 发送合并请求
      
   

