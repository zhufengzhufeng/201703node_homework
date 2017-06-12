#git命令
2017/6/10

@(node)

######一个网站
http://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000/

####安装：
http:git-scm.com 下载git
mac
 /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
这段代码 安装homebrew
brew install git 在mac终端执行

####基本命令
- 清空git命令窗口:clear

####初始化git管理的范围:
- 查找到某个目录下:cd xxx
- 返回上级目录:cd ..
- 查询当前目录:pwd

####配置当前用户信息(可以用户名采用 github账号和邮箱，没有配置过不能使用commit):
- 配置当前用户名:git config --global user.name 'zhoumingzhe'
- 配置当前用户邮箱:git config --global user.email '360626033@qq.com'
- 查看已经配置项:git config --global -l
- 查看配置列表:git config --list

####文件管理
- mkdir(创建文件夹):mkdir xxx
- 初始化git:git init
>如果初始化错误，需要删除一下.git:rm -rf .git(注意：rm -rf不能随便用，删除之后不易恢复)

- 增加一个文件:echo '内容' >> 文件名.后缀
- 查看目录下的文件:ls
- 查看目录下的文件(包括隐藏文件):ls -a
- 忽略文件:git ignore 文件名或后缀名
- touch(创建文件，默认空文件):touch xxx.xxx
- cat(查看文件中内容):cat xxx.xxx
- vi(编辑文件内容):vi xxx.xxx(默认不可修改)  -> i键(插入模式) ->  esc+:wq保存并退出/q!强制退出
######提交文件:
- 提交到暂存区:git add xxx(.->目录下全部文件)
- 提交到历史区:git commit -m 文件名
- 提交所有文件到历史区:git commit -am
- 提交到历史区(联合提交，只限提交过的文件):git commit -a -m
- 查看文件传输状态:git status
- 查看传输历史纪录:git log
######链接远程仓库
- 克隆远程仓库:git clone 远程地址
- 远程推送文件:git push origin master 
- 远程推送文件:git push -u origin master(origin->仓库名master->分支名，master是默认的根，-u是将这两设置为默认的，下次直接git push将默认这个仓库和分支)
- 查看远程仓库列表:git remote -v
- 修改远程仓库地址:git remote origin set-url(origin是仓库名，创建的时候自己设置的，可以通过列表查看；url是远程仓库地址)
- 删除远程仓库:git remote rm origin
- 添加远程仓库:git remote add origin url(origin是仓库名，自己设置；url是远程地址)
- 直接修改config文件也可以更改远程仓库信息

####比较git三个区的不同:
git的不同,工作区和暂存区:git diff
工作区和历史区:git diff master
暂存区和历史区:git diff -cached

####文件回滚：
- 暂存区回滚工作区:git checkout 文件名
- 查看历史纪录:git reflog
- 回滚版本:git reset --hard 版本id
- 当我们提交到暂存区，移除暂存区:git reset HEAD 文件名

####分支:
- 查看分支:git branch
- 新增分支git branch 分支名
- 切换分支git checkout 分支名
- 创建并切换分支:git checkout -b dev(dev是创建的分支名)   (默认创建的分支，和创建之前的分支是一摸一样的)
>分支提交后，提交到某个分支上，这个文件就归属于提交的分支，一般情况下，开发项目都会有一个主分支，在这份主分支上拉取自己的小分支进行开发，如果发生错误不会影响主分支

- 合并分支:git merge 分支名
- 删除分支git branch -D 分支名

######冲突解决:
->在文件中去掉
>>>>>>>>>>
==========
<<<<<<<<<<
->保留最终结果即可->再次提交即可

####发布静态页：
>如果想让gitbub提供"静态"网站，可以发不到gh-pages的分支上

- git checkout -b gh-pages
- git add .
- git commit -m 'ok'
- git push origin gh-pages(提交的分支不再是master)

>在settings中找到新的网址 观看页面，如果该项目下不只是一个html文件，需要在找到的网址后面添加需要展示的html文件的路径


###交作业流程
#####组员
- 组员fork组长的代码
- git clone 到自己的文件夹下
- 和组长建立联系 git remote add teamleader 地址
- 放入自己的文件提交
- 拉取组长的最新代码 git pull teamleader master
- 提交到自己的仓库上  git push origin master
- 发送合并请求
#####组长
- 先拉取自己的最新代码
- 和老师建立联系 拉取老师最新代码
- 放入自己的代码
- 提交到自己的仓库上
- 发送pullrequest 请求
#####第一次提交作业
- 组长需要fork老师
- git clone 会自动的建立连接
- git add .
- git commit -m ''
- git push origin master
#####老师
- merge pull request