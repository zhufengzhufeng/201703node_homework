## git的使用方式
```
命令行
图形化界面


```

## 初始化 git管理的范围
```
cd  进入指定文件夹或者返回上级
pwd 显示当前目录

使用git之前需要配置当前用户信息

```

## 配置当前用户信息
```
可以用户名采用 github账号和邮箱
没有配置过不能使用commit 

配置命令

git config --global user.name 'qq804319070'
git config --global user.email '804319070@qq.com'


看git的配置列表 (看用户有没有配置上)
git config --list

```

## git文件管理命令 
```

master 主分支

mkdir xxx 创建目录
ls查看当前目录下所有文件
touch index.txt 创建文件
cat index.txt 查看指定文件中内容

vi  index.txt    编辑指定文件
进入后按i为编辑模式
编辑完成后 esc + :wq 保存退出
q! :强制退出


```

## 创建文件后查看文件状态

```
git status
如果出现红色文件名说明该文件在工作区中
绿色代表在暂存区/过渡区


git add . 提交所有文件到暂存区/过渡区

git commit -m"提交注释内容" 把暂存区提交到历史区


commit 提交
abort 中断



```
## 比较
```
git diff 工作区和暂存区的比较
git diff master 工作区和历史区的比较
git diff --cached


```

## 暂存区回滚工作区

```
git checkout 文件名
先从缓存区滚回,缓存区无内容，从历史区域滚回
```

## 回滚版本
```
硬回滚

git reset --hard id回到指定的版本号

git log 查看提交的日志版本号(查看历史区) 

git reflog 查看所有版本号(包括修改过的)

```
## 当提交到暂存区了,想删除在暂存区
```
git reset HEAD (文件名)

```
## 分支
```
查看 分支
git branch 

新增分支
git branch 分支名

切换分支
git checkout 分支名

删除分支
git branch -D 分支名


创建并切换分支
git checkout -b dev


默认创建的分支和之前的一模一样的


在哪个分支上提交到历史区哪个文件

分支提交后
在哪个分支上提交



```
## 初始化错误 需要删除一下git
```

rm -rf .git 

```
## 合并分支
```
开发项目,都会有一个主分支,
在这个主分支上拉取自己的的小分支进行开发,
如果发生错误不会影响主分支.


合并分支:想要合并分支必须在主分支上合并小分支
在主分上执行命令git merge xxx  xxx:你想要合并的小分支


```
## 将本地一个仓库 推送到远程仓库
```
本地有内容 远程没内容
建立一个文件夹(如果当前文件夹个空的不会提交)
初始化git(如果想保留空文件夹在空文件夹下加一个 .gitkeep即可)
git init

然后增加一个README文件
echo '内容' >> README.md

增加一个忽略文件(在这个文件中写入的内容均不会改变)
touch .gitignore

提交到历史区
链接远程仓库

git remote add '链接仓库的名称' https://.....

git push '链接仓库的名称' master

```
## 发布静态页
```
首先在本地创建一个叫 gh-pages的分支名
然后把静态页上传到 gh-pages分支上
然后推到github上

在settings中找到新的网址,如果不是index.html需要手动添加后缀名

```

```
git remote rm  xxx  删除链接
```