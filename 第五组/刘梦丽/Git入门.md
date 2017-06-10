# git的使用
## 1. 版本控制
-  备份文件 

    类似于网盘备份
    
    我们的代码也需要备份。修改完了以后提交给版本库进行保管，哪一天代码没了也可以找回来。
-  记录历史
 
    比如我们打游戏就要存档，万一挂了还可以从上个存档的地方重玩。
    和网盘不同，网盘保留的是最新的状态，历史的记录都没有了，修改的记录也都找不回来了

    网盘无法知道文件里的某行代码是何人在哪个时间添加进去的
-   回到过去
    
    如果我有一天不小心删除了某个文件，我们可以通过历史备份找回来
-  多端共享
    Git仓库可以通过PC端、Android、IOS移动端等各个终端访问
    可以随时随地修改代码,公司没干完的工作回家接着干
-   团队协作
    多个人或团队合作编写一个项目
    合并代码处理冲突
## 2. 什么是git
> 为了告别手动方式管理Linux代码,并且符合开源和免费,Linus花了两周时间自己用 C 写了一个分布式版本控制系统，这就是Git
> Git迅速成为最流行的分布式版本控制系统，尤其是 2008 年 GitHub 网站上线了，它为开源项目 免费提供Git存储 ，无数开源项目开始迁移至GitHub，包括jQuery，PHP，Ruby等等。
## 3. git的安装
-  windows下安装

   下载地址 http://git-scm.com
-   mac下安装
 
    下载Homebrewhttp://brew.sh

    -  拷贝对应脚本到终端下安装HomeBrew
    - 然后在终端执行 brew install git命令安装*git
    - 安装xcode会默认下载git

- 集中式：依赖于中央处理器，所有的代码信息资源都存档在一个地方，弊端：如果中央处理器挂掉，所有代码资源全部没有
- 分布式 ：不依赖于中央处理器，
 
git 分布式;

## git 使用方式：
- 命令行
- 图形化界面

## 初始化 git 管理范围
- cd 改变目录
- cd .. 返回上级目录
- pwd 查看/打印当前目录
- clear 清屏

## 初始化git 
- 配置当前用户信息：
可以使用用户名采用GitHub 账号和邮箱，没有配置过的不能使用commit
- git config --global user.name xxx 配置用户名
- git config --global user.email xxx 配置用户名
- git config --list 查看配置列表
- 如果初始化错误，需要删除初始化文件  rm -rf xxx 文件名

## 创建目录
- mkdir xxx(文件名)
- mk git init  初始化git文件夹

```
 
molly@DESKTOP-E6B08R2 MINGW64 ~/Desktop/Git-repo
$ git init
Initialized empty Git repository in C:/Users/molly/Desktop/Git-repo/.git/
// .git 隐藏文件夹
```
- ls -a 查看目录内文件
- touch xxx.xx 创建文件 默认是空文件
- cat xxx.xx 查看文件内容
- vi xxx.xxx  编辑文件内容，默认是不可编辑 
    - 输入i 可编辑文件，
    - 保存并退出 esc+ :wq, 
    - 强制退出 :q！ 
- 查看文件状态 git status

## git分三个部分：
工作流
http://card.mugeda.com/campaigns/56d2c4a0a3664e3308000407/20160304090522/56d97729a3664e9c65000047/index.html
- 工作区
    - git add xx.xx（文件名，可以用. 代替/A） 添加到暂存区 
    - git rm --cached xxx.xx清除暂存区的内容 
   
- 暂存区
    - git commit -m '内容（必须写内容）' 提交到历史区
    
    
- 历史区/版本库：放进的内容不会丢失
    - 每次 提交信息，在历史区都有一个专属ID号
    - git log 查看历史区日志（当前节点之前的）
    
    - git relog 查看所有的历史区日志 
   
## 比较git三个区的不同
 - git diff   比较工作区和暂存区的内容
-  git diff xxx（历史区的名字） 比较工作区和历史区的内容
 -  git diff --cacahed 比较工作区和历史区的内容
 
 ## 撤销 (回滚)
-  git checkout (文件名) 撤销刚刚修改的内容(从暂存区到工作区)
- git reset --hard id(文件id) 撤销从历史区，工作区，历史区，暂存区全部一致
## 当我们提交到暂存区，移出暂存区(硬删除)
```
在暂存区中将这个文件，移除掉暂存区
git reset head index.txt 将这个文件回到上一次暂存区中
```
## 创建分支
- git branch 查看分支
- git  branch xxx(分支名) 创建xxx分支
- git checkout xxx 切换到xxx分支
- git branch -D xxx 删除xxx 分支
## 创建切换分支
- git checkout  -b xxx（分支名） 创建并切换到xxx分支

==注意==默认创建的分支跟之前创建的分支是一模一样的内容，后期该分支工作区中新建的文件，在提交到该分支工作区之前创建的文件都是公有的

## 分支提交后
- 提交到摸一个分支上，这个文件就属于提交的分支，一般情况下，开发项目都有有一个主分支，在这个主分支上拉去属于自己的小分支进行开发，如果发生错误不会影响大分支；
- 合并分支，必须在大分支上合并小分支
```
git merge xxx(分支名) 
git branch -D xxx 移除分支
```

## 联合提交 
- 只限提交过的文件
```
git commit -a -m '内容'
```
## 解决冲突
去掉>>>>====<<<<<保留最终的结果
- 再次提交
```
git commit -a -m '内容'
```
## 将本地一个仓库 推送到远程仓库
- 本地有内容  远程没内容
- 建立一个文件夹 (如果当前文件夹中是空文件，文件夹是不会提交的)
```
mkdir 201703homeword
```
- 初始化git (如果想保留空文件夹增加.gitkeep文件即可)
```
git init
```
- 增加一个README文件
```
echo '内容' >> README.md
```
- 增加一个忽略文件
在这个文件中写入的内容 均不会提交
```
touch .gitignore 
.idea
node_modules
.DS_Store
bower_components
```
- 提交到历史区
```
git add .
git commit -m 
```
- 链接远程仓库
```
git remote add origin https://github.com/zhufengzhufeng/201703node_homework.git

```
- 推送到远程仓库
增加-u 以后不用指明 origin和master
```
git push origin master -u
```

> 操作git命令 永远在根路径下！！！


## 发布静态页
- 如果想让github 提供"静态"网站 可以发布到gh-pages的分支上
```
git checkout -b gh-pages
git add .
git commit -m 'ok'
gut push origin gh-pages (提交的分支不在是master)
```

> 在settings中找到新的网址 观看页面，如果不是index.html需要手动添加后缀名

## 团队

## 组员
- 组员fork组长的代码
- git clone 到自己的文件夹下
- 和组长建立联系 git remote add teamleader 地址
- 放入自己的文件提交
- 拉取组长的最新代码 git pull teamleader master
- 提交到自己的仓库上  git push origin master
- 发送合并请求
## 组长

### 第一次提交作业
- 组长需要fork老师
- git clone 会自动的建立连接
- git add .
- git commit -m ''
- git push origin master
## 老师






