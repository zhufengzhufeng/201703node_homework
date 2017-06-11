## git的使用方式 
- 命令行 
- 图形化界面 sourceTree

## 初始化 git管理的范围
- cd change directory 改变目录
- pwd print working directory 打印当前工作目录

## 配置当前用户信息
- 可以采用 github账号和邮箱，没有配置过 不能使用commit
```
git config --global user.name 'zhufengzhufeng'
git config --global user.email '894918097@qq.com'
git config --list 查看配置列表
``` 

## mkdir创建目录
```
mkdir xxx
```

## 初始化git
```
git init
```
## 查看目录中的文件
```
ls -a
```

## touch 
创建文件,默认空文件
```
touch index.txt
```

## cat
查看文件中内容
```
cat index.html
```

## vi
```
vi index.txt
i 插入模式
esc + :wq 保存并退出
q! 强制退出
```

## 创建文件后 查看文件状态
```
git status
```

## git commit 
- 提交到历史区
```
git commit -m 'xxxx'
```

## git diff
```
git diff 查看不同区的不同 查看工作区和暂存区的不同
git diff master 查看工作区和历史区的不同
git diff --cached 查看暂存区和历史区的不同
```

## 回退版本
```
git checkout <file name> 回退到暂存区的文件状态
git reset --hard <id> 回退到历史区某个版本
git log 查看历史版本变化日志
git reflog 查看所有版本变化日志
git reset HEAD <file name> 取消本次暂存区修改
```

## 分支
> 默认创建的分支和之前的分支一模一样

> 一般情况，开发项目都有一个主分支，在这个主分支上拉取自己的小分支进行开发，提交到某个小分支上，这个文件就属于当前分支所有，不会影响主分支的代码，主分支随时可以合并某个小分支，来更新最新的版本

> 合并小分支的时候，当主分支和小分支的内容出现冲突，则需要更改冲突的内容，之后再提交
```
git branch 查看分支
git branch <branch name> 新增分支
git checkout <branch name> 切换分支
git branch -D <branch name> 删除分支（注意不能删除当前所在的分支）
git checkout -b <branch name> 创建并切换到该分支
git merge <branch name> 合并某个分支
```

## 将本地一个仓库推送到远程仓库
> 如果一个文件夹是空的，那么默认不能被提交，需要在该空文件夹里新建一个.gitkeep的隐藏文件
- 本地有内容，远程没内容

增加一个README文件
```
echo "content" >> README.md
```
增加一个文件用于提示忽略上传的文件
```
touch .gitignore
.idea
node_modules
bower_components
```
绑定一个远程地址
```
git remote add origin <url>
如果已经绑定了一个远程地址，则需要先移除该地址再绑定新的地址
git remote rm origin
```
将本地仓库的代码上传到远程GitHub仓库
```
git push -u origin master  -u是为了以后上传提供快捷命令
```

## GitHub发布静态页面

如果想让GitHub提供静态页面，可以发布到gh-pages的分支上
- 创建一个分支
- 在GitHub gh-pages的分支页面中---settings中找到新的网址，观看页面

