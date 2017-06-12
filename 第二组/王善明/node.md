## 配置环境变量
计算机=> 属性 => 高级系统设置 => 环境变量 => path新增即可
## 异步编程 回调函数
能用异步（非阻塞）就不要用同步
## nodejs是单线程 java多线程
多线程 => 感觉就像可以同时干很多事，切换上下文的速度比较快，多线程可以使用多核处理器
## 进程 > 线程
- nodejs里不能为一个进程开多个线程，但是能开多个进程（子进程）
- H5里的webWorker

## npm
> 使用npm全局安装的包不会被配置到环境变量中，由于npm已经存在环境变量中，相当于在npm下有一个快捷方式连接真实的文件

- nrm 切换下载地址
    - nrm ls 列出所有源
    - nrm test 测试所有源的下载速度
    - nrm use <source name> 切换不同的源

- http-server 能够将一个静态页面生成一个局域网地址

> 使用npm本地安装（在当前项目中使用），默认安装时会在当前目录查找node_module文件夹，如果找不到，则向上级目录查找，一直找到根目录，如果找到了，则安装到该文件夹，如果没找到，则会在当前目录新建一个node_module文件夹，将包装到该文件夹下；如果初始化一个package.json文件，就不会导致向上级目录查找

#### package.json 可以记录安装过哪些包
- npm install jquery --save  项目依赖
- npm install babel-core --save-dev  开发依赖

> 注意安装的时候加了什么后缀，卸载的时候也要加同样的后缀

## yarn
- 初始化package.json
```
yarn init -y
```
- 安装包
```
yarn add jquery   默认就是项目依赖
yarn add babel-core --dev  开发依赖
```
- 卸载包
```
yarn remove xxx
```

## 自己开发第三方模块（上传到npm官网上）
- 包里需要什么？ package.json  入口文件  README.md
- 先把npm的下载源切换成npm(nrm use npm)
- npm addUser  登录账号，如果账号没有则是注册
- npm publish  发布包
- 升级内容需要重新更改版本，再发布
- npm unpublish --force  删除包


## 搭建博客
```
npm install hexo-cli -g 安装全局命令hexo
hexo init 文件夹的名字 
cd blog
npm install
hexo server
```
## 发布到github上(在当前项目下安装)
```
npm install hexo-deployer-git --save
```
## 创建仓库
- 用户名.github.io

## 配置发布命令
```
deploy:
  type: git
  repo: https://zuyuan:xy19921004@github.com/zuyuan/zuyuan.github.io.git
  branch: master
```
## hexo g生成html √
## hexo d发布项目 √

> 每次更新,需要重新生成和发布,操作git时永远在根路径下执行