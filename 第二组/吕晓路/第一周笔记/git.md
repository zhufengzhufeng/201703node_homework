## 一. git
-  使用方式
    - 命令行
    - 图形化界面
        - sourceTree
- 基本命令
    - cd: change directory 改变目录 
    - pwd: print working directory 打印当前目录
    - mkdir: make directory 创建目录
    - ls :list 查看目录中的文件
        - "-a":查看所有
    - touch: 创建文件,默认空文件
    - cat: 查看文件中内容
    - vi: 编辑文件
        - "i":插入
        - "a":添加
        - "esc":退出编辑模式
        - ":wq!":强制保存退出
- 配置当前用户信息
    - 可以用户名采用 github账号和邮箱,没有配置过,不能使用commit
    ```
    git config --global user.name ""
    git config --global user.email ""
    git config --list
    ```
- 初始化
    - git init 
- 使用
    - 文件的提交
        - git add .:将所有文件添加到暂存区
        - git commit -m:添加确认信息,将文件从暂存区提交到历史区
        - git status: 查看git状态
        - 可以联合提交,只限提交过的文件
            - git commit -a -m ""
    - git log:日志
    - git diff:查看工作区和暂存区的对比
        - "--cached":查看暂存区和历史区的对比
        - "master":查看工作区和历史区的对比
    - git checkout 文件名/".":将暂存区的文件回退到工作区,将之前add命令提交的修改撤回
    - git reset 
        - "--hard" id号:从历史区某个版本重设到工作区
        - "head":从暂存区中移除之前add命令提交的修改
    - git reflog:查看各个版本的文件
    - git branch:查看分支
        - "分支名":添加分支
        - "-D/--delete":删除分支
    - git checkout:切换分支
        - "-b":创建分支并切换分支
    - 默认创建的分支和创建之前的分支一摸一样的
        - 分支和主干的工作区是相同的
        - 提交到某个分支上,这个文件就归属于提交的分支,一般情况下,开发项目,都会有个主分支,在这个上拉取自己的小分支进行开发,如果发生错误不会影响主分支
    - git merge "分支名":主干合并分支
        - 必须在主分支上操作
    - 解决冲突
        - 去掉>>>>> ====== <<<<<保留最终的结果即可
        - 再次提交
    - 将本地一个仓库,推送到远程仓库
        - 本地有内容,远程没内容
        - 建立一个文件夹(如果当前文件夹中是空文件,文件夹是不会提交的)
            - touch .gitkeep:建立一个保存文件,使空文件夹也能提交
        - 操作git命令,永远在根目录下
        - 增加一个README文件
            - echo '内容' > README.MD
                - 一个'>'代表创建或修改
                - 两个'>'代表增加内容
        - 增加一个忽略文件
            - touch .gitignore:在这个文件中写入的内容均不会提交
        - 连接远程仓库
            - git remote add origin http...
        - 推送到远程仓库
            - git push origin master
        - 发布静态页
            - 如果想让github提供"静态"网站可以发布到gh-pages的分支
            - 在setting中找到新的网站观看页面,如果不是index.html需要手动添加后缀名
            ```
            git checkout -b gh-pages;
            git add .;
            git commit -m "ok";
            git push origin gh-pages(提交的分支不在是master)
            ```
        - 组员
            1. 组员fork组长的代码
            2. git clone 到自己的文件夹下
            3. 和组长建立联系 git remote add teamleader 地址
            4. 放入自己的文件提交
            5. 拉取组长的最新代码 git pull teamleader master
            6. 提交到自己的仓库上 git push origin master
            7. 发送合并请求
        - 组长
            1. 先拉取自己的最新代码
            2. 和老师建立联系,拉取老师最新代码
            3. 放入自己的代码
            4. 提交到自己的仓库上
            5. 发送pull request请求
            
            
###   git整体操作流程：
####                 1、fork珠峰培训讲师的仓库
####                 2、把自己的仓库下载到本地   
                    操作：https://github.com/zhouxiaotian/JavaScript-201508.git -> 在本地打开git bash here -> $ git clone 地址 -> $ git remote -v 就可以查看是否和git仓库保持连接
####                 3、在本地增加和讲师仓库的连接
                    目的:和讲师的github仓库保持连接,这样以后我们就可以通过命令获取最新讲义了
                	   操作:git bash here -> $ git remote add zhufeng https://github.com/zhufengpeixun/JavaScript-201508.git -> $ git remote -v 查看是否增加成功   
####                 4、拉取老师的最新讲义信息
                   目的:随时更新讲义	   
                   操作:git bash here -> $ git remote update zhufeng -> $ git pull zhufeng master 
                
####                 5、把最新的讲以上传到自己的github仓库
                   目的:让自己的github仓库随时保持最新的代码   
                   操作:git bash here -> $ git pull origin master -> $ git add -A -> $ git commit -m"备注" -> $ git push origin master -> 输入github用户名密码   
                                  
            
## 二. node
- 官网下载
- 配置环境变量
    - 在path中新增即可
- 异步编程
    - 回调函数
- node.js是单线程 java多线程
    - 多线程同时干很多事,切换上下文的速度比较快,多线程可以使用多核
- 进程-线程 
    - nodejs不能再一个进程中开对个线程,开多个线程(子线程)
    - h5里的webwork,开辟一个新的线程
- 全局对象
    - 能在页面中直接使用的就是全局对象
    - 在服务器中都挂载global上
        1. this,在文件中直接使用当前的this不是global
        2. 自己声明的变量不会挂载在global上,如果没有var,变量会声明在global上
    - process:进程
        - 
    - buffer:缓存区
        - 内存
    - setImmediate/clearImmediate:设置立刻和清除立刻 
        - 相当于setTimeoutclearTimeout,不输入时间
    - setInterval/clearInterval: 设置定时器和清除定时器
    - setTimeoutclearTimeout:设置定时器和清除定时器
    - console:time/timeEnd
        - 可用于计算被两者包起来的代码执行时间
- 获取环境变量
    - 区分本地开发环境 和线上开发环境
    - 设置环境变量 set NODE_ENV=developement 
    ```
    console.log(process.env);
    let url =''
    if(process.env.NODE_ENV === "hello"){
        url =  'http://localhost:8080';
        console.log('开发环境 ');
    }else{
        url = 'http://www.baidu.com';
        console.log('线上环境');
    }
    ```