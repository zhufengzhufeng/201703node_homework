1.集中式  中央处理器
2.分布式   中转站  github gitlab


一.git和svn的区别
二.git的安装
       git Bush heare  命令行

三.git的使用
命令行
图形化界面  sourceTree

##初始化  git  git管理范围
cd changge directory  改变目录
pwd  print working directiory打印工作目录
clear 清除屏幕，库看到以前信息

##配置当前用户信息
-可以用户名  采用gitHub账号和邮箱   ，如果没有配置过，不能使用commit
->git config --global user.name "用户名"
->git config --global user.email "用户名"
->git config --list

->mkdir xxxx  创建目录
->git init (进到文件夹)初始化一个git可以管理的仓库
-> git init
    Initialized empty Git repository in C:/Users/Administrator/Desktop/git-repo/.git/

 ->如果初始化错误，需要删除一下。git
 ->rm -rf .git

 ----------------------
->查看目录中 的文件 ls -a
    ->master  根目录
->touch 创建文件  默认为空文件
->rm 删除文件

->cat 文件名    查看文件中内容
->cat 文件名    查看文件中内容

->vi   修改文件名 默认是不可编辑的
        ->i(insert插入模式) esc :wq(保存成功并退出)
        ->q!  强制退出



####创建文件后查看文件状态
    ->git status  查看git状态  红色代表没有加入
工作区
    ->git add .或者git add -A（1.版本）
暂存区/过渡区
    ->git commit -m "提交的原因"
历史区/版本库：放到历史区中不会丢失

->git log  查看(提交日志)


##比较git的三个区的不同
git diff  工作区和暂存区
git diff  naster    工作区和历史区
git diff  --cached  暂存区和历史区


--------暂存区回滚工作区(将暂存区和工作区变得一致)
git checkout .文件名

----回滚版本---
->历史区 工作区 暂存区全部一致
git reflog 查看版本
git reset --hard +版本id

--------
当我们提交到暂存区，移除残存区

->在暂存区中将这个文件移除暂存区
git reset HEAD +文件名
git checkout 文件名   ->用上一次暂存区的东西覆盖


----------------------
git branch 查看分支
git branch +新分支名
git checkout +分支名  切换分支
git branch -D   删除分支
->创建并切换分支
git checkout -b dev
->默认创建出来的分支和创建出来的分支一模一样
->提交到某个分支上，在这个文件就归属于谁提交的分支，一般情况下，开发向目，都会有一个主分支，在这个主分支上拉去小分支:分支错误不会影响主


->合并小分支  必须在大分支上合并小分支
git merge dev
git branch -D dev 合并后删除小分支


--------------
提交过的文件，可以联合提交
目的 git commit -a -m 'ugligy'
---------------------
两个合并，并手动解决冲突，保留最终的结果，并再次提交




----------------------
##将本地一个仓库推送到远程仓库
-本地有内容，远程没内容

1.简历一个文件夹，如果当前文件夹是空文件，文件夹是不会被提交的
如果想保留空文件夹，增加.gitkeep文件
2.增加一个README文件
3.增加一个忽略文件 touch gitignore
    常见忽略文件：.idea node-Store







history >1.text 导出历史操作记录


### 第一次提交作业
-组长需要fork老师
-git clone + url + 别名      会自动建立连接 git remote -v  检查连接
->进入到别名文件中 进行增加代码的操作，不要操作其他原始文件
-git add . 根目录下提交
-git commit -m ""
-git push origin master （不需要创建分支）
将代码提交到自己的仓库后，发送new pull request 请求，检查信心，会将写好的代码提交到老师的仓库，老师可以选择合并或者关闭合并


###组员
->fork组长的代码
->git clone  下载到本地
->跟组长建立联系   git remote add teamleader（别名） +组长地址
    ->git Remote -v 检查是否连接正确
    ->git remote rm teamlear .. 如果错误，就删除
->把自己的作业放进去,放到自己对应的组
->git add .
->git commit -m ""
->git pull teamleader master    ->拉取组长的
->git push origin master    推送自己的代码
->new pull request  发送合并请求
->create pull request

###组长 收到作业后
拉取自己的
拉取老师的
更改后再提交给自己
发pull request

###
组长->拉取自己的最新的代码；拿到组员作业
->git pull origin master
->和老师建立联系 ->拉取老师的代码
->把自己的代码放进去
->推到自己的仓库
->推送给老师  发送请求   ->老师合并


###老师
-merge pull request