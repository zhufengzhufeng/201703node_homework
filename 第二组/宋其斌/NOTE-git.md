# git基本命令
## 1.配置当前用户信息
- git config --global user.name 'xxx'   配置用户名
- git config --global user.email 'xxx.@xxx' 配置用户邮箱
- git config --list     查看配置列表

## 2.文件操作
- mkdir xxx     创建文件夹(创建目录)
- cd xxx        进入到文件夹目录中
- git init      初始化git仓库
- rm -rf .git   初始化git错误,删除.git
- ls            查看没有隐藏的文件
- ls -a         查看目录中的所有文件列表
- touch xxx.txt 创建文件,默认文件内容为空
- cat xxx.txt   查看某个文件中的内容
- vi xxx.txt    进入文件编辑模式,默认不能编辑,按a(新增模式)/i(插入模式);编辑完成按esc + : + wq(q!)  wq保存退出  q!不保存强制退出 

## 3.git提交

- git add .  (git add -A) 从工作区传到暂存区
- git commit -m 'sada'    提交历史区(必须输入提交信息,否则会中断提交) 如果执行 git commit 会进入到编辑状态写入提交信息再退出
- git log                 查看提交日志
- git status              查看提交状态(红色表示在文件工作去,绿色表示已经提交到暂存去了)
- git rm --cached xxx.txt 将文件从暂存区移除

## 4.比较不同 git diff
- git diff      默认比较的是工作区和暂存区的代码
- git diff master    工作区和版本分支区比较
- git diff --cached  暂存区和版本分支区比较

## 硬回滚
>　历史区　暂存区　工作区　保持一致
- git checkout xxx.xxx(.)  文件名 或者所有文件  撤销对工作区文件的修改
- git reset --hard id 回到某个版本,id是版本id一般取前7位即可
- git reflog       查看历史版本

## 提交到暂存区后回到暂存区的上个版本
- git reset HEAD xxx.xxx 将这个文件回到上一个暂存区版本中

## 分支
- git branch               查看分支
- git branch dev 分支名     新增分支
- git checkout dev         切换分支
- git checkout -b dev      创建并切换 (-b是branch创建的意思)
- git branch -D dev        删除分支(删除前切换到其他分支中)
> 创建出来的分支默认和创建之前的分支是一模一样的,之后文件提交到某个分支上,这个文件就归属于提交的分支,一般情况下,开发项目,都会有一个主干,在这个主分支下拉取自己的小分支进行开发,不影响主干


## 合并分支
- git merge dev     在主干master下执行,将dev分支合并到master下
- git branch -D dev 合并完成删除dev分支

### 到处git命令操作历史记录
- history >xxx.txt 将历史记录导出到处到xxx.txt文件中

##　联合提交
```
git commit -a -m '' 只能对已经提交过的文件使用

```

## 解决合并冲突
去掉 >>>>HEAD


## 推送到远程仓库

默认不会提交空文件(增加.gitkeep问价即可提交空文件)

```
echo '内容' > README.MD   写入
echo '内容' >> README.MD  追加

touch .gitignore  添加忽略提交文件
常见的忽略文件有  .iade  node_modules .DS_Store  bower_components
```


```
git remote add origin(连接名) https:...  增加一个远程连接
git remote -v       查看当前已有的连接

```


## 提交顺序

```

git add .
git commit -m''
git remote add origin https:...
git push origin master
```
## 发布静态页
```
git checkout -b gh-pages
git add .
git commit -m ''
git push origin gh-pages
```