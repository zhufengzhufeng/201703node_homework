#git


## git的使用方式 
- 命令行 
- 图形化界面 sourceTree

## 初始化 git管理的范围
- cd (change directory 改变目录)
- pwd (print working directory 打印当前工作目录)

## 配置当前用户信息
- 可以用户名采用 github账号和邮箱，没有配置过 不能使用commit(only write one)
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
## 如果初始化错误 需要删除一下.git
```
rm -rf .git
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
比较git的三个区的不同
```
git diff  git的不同 工作区和暂存区
git diff master 工作区和历史区
git diff -cached 暂存区和历史区
```

## 暂存区回滚工作区
- 将暂存区和工作区变得一致
```
git checkout 文件名
```

## 回滚版本
- 历史区 工作区 暂存区 全部一致
```
git reflog
git reset --hard 版本id
```

## 当我们提交到暂存区,移除暂存区
- 在暂存区中将这个文件，移除掉暂存区
```
git reset HEAD index.txt 将这个文件回到上一次暂存区中
```

## 分支
- 查看分支
```
git branch
```
- 新增分支
```
git branch 分支名
```
- 切换分支
```
git checkout 分支名
```
- 删除分支
```
git branch -D dev
```

## 创建并切换分支
```
git checkout -b dev
```
> 默认创建的分支 和创建之前的分支是一模一样的

## 分支提交后
- 提交到某个分支上，这个文件就归属于提交的分支，一般情况下，开发项目，都会有一个主分支，在这个主分支上拉取自己的小分支进行开发。如果发生错误不会影响主分支，
- 合并分支,必须在打分支上合并小分支
```
git merge dev
git branch -D dev
```

## 合并分支


## 可以联合提交
- 只限提交过的文件
```
git commit -a -m'ugligy'
```

## 解决冲突
去掉 >>>>>  ====== <<<<<保留最终的结果即可

- 在次提交


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

> 操作git命令 永远在根路径下！！！,先创建.gitignore在执行add加入暂存区，否则导致没忽略掉，删除本地.idea 再次add 即可


## 发布静态页
- 如果想让github 提供"静态"网站 可以发布到gh-pages的分支上
```
git checkout -b gh-pages
git add .
git commit -m 'ok'
gut push origin gh-pages (提交的分支不在是master)
```

> 在settings中找到新的网址 观看页面，如果不是index.html需要手动添加后缀名

## 组员
- 组员fork组长的代码
- git clone 到自己的文件夹下
- 和组长建立联系 git remote add teamleader 地址
- 放入自己的文件提交
- 拉取组长的最新代码 git pull teamleader master
- 提交到自己的仓库上  git push origin master
- 发送合并请求
## 组长
- 先拉取自己的最新代码
- 和老师建立联系 拉取老师最新代码
- 放入自己的代码
- 提交到自己的仓库上
- 发送pullrequest 请求
### 第一次提交作业
- 组长需要fork老师
- git clone 会自动的建立连接
- git add .
- git commit -m ''
- git push origin master
## 老师
- merge pull request


#node

- 全局对象 能在页面中直接使用的就是全局对象
  - console / setTimeout / setInterval

- 在node中可以直接使用的都叫全局对象
  - 在服务端 都挂在global上
  - 1.this ,在文件中直接使用当前的this不是global
  - 2.自己声明的变量 不会挂载在global上,如果没有var变量会声明在global上
  

- process 进程
- Buffer 缓存区 内存
```
clearImmediate: [Function], 清除立即
clearInterval: [Function],
clearTimeout: [Function],
setImmediate: [Function],
setInterval: [Function],
setTimeout: [Function],
console: [Getter]
```
-   console log dir warn info error (time timeEnd计算时差)
-  编辑器 vscode
```
console.time('first');
for (let i = 0; i < 10; i++) {
}
console.timeEnd('first');
```
-  setTimeout 异步的,这里的this指向的都是自己
```
function fn(who,food) {
    console.log('eat'+who,food);
}
```
- setTimeout(fn,1000,'人','橘子'); 
  - setTimeout可以传递参数 从第二个参数开始
- 事件环 是基于事件驱动的  服务员的第二个小本
```
setImmediate(function () {
    console.log('setImmediate');
});//setImmediate立即 是异步方法

setTimeout(function () {
    console.log('timeout');
});
```
setImmediate,setTimeout顺序是不确定的 setImmediate第二个小本上

### 获取环境变量
- 1). 区分本地开发环境 和线上开发环境
  - 设置环境变量 set NODE_ENV=developement 设置环境变量
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

### 模块化
- 避免污染全局变量，团队协作不会产生冲突
- 单例模式var obj201703node = {a} 名字无法避免冲突,调用时命名过长
- 闭包 seajs CMD 就近依赖  requirejs AMD 依赖前置

- common js规范 定义了如何使用模块 如何定义模块 如何导出模块
  - 如何定义模块 在node文件中每个js就是一个模块，为了每个模块之间没有关系 所以在代码执行时外层套了一个闭包，闭包中的形参也是全局对象
```
console.log(exports===this);//在这个闭包中将this指向改变成了exports对象

var dialog = {a:1};
/*module.exports = dialog;
exports.dialog = dialog;
module.exports.dialog = dialog;*/
//exports = dialog ×
```
## node下载
https://nodejs.org/en/

## 下载node源码
https://nodejs.org/en/download/

## 没有配置环境变量
可以配置一些，快捷键 

## 配置环境变量
- 计算机=> 属性 => 高级系统设置 => 环境变量 => path新增即可

## 异步编程 回调函数
- 能用异步（非阻塞）就不要用同步

## nodejs是单线程 java多线程
- 多线程 感觉像同时干很多事（一边看电视 一边睡觉），只是切换上下文的速度比较快，多线程可以使用多核

## 进程 > 线程
- nodejs不能再一个进程中开对个线程 ， 开多个进程（子进程）
- h5里的webWorker

### 如何使用模块

- 1.三种模块 内置模块 node中写好的
- 2.第三方模块 需要安装的
- 3.文件模块 ./ ../ 相对路径引用
- 如果一个模块多次使用 这个模块会被缓存 require.cache 代表的是缓存的模块
```
let result = require('./4.arg');
//1.如果require一个对象的返回值不是exports对象,最终拿到的是 module.exports
console.log(result);
```

## npm node package manager
- 管理所有第三方模块 ， 有npm 安装node买一送一
## npm可以安装模块
## npm可以安装第三方模块
- 全局安装后会在全局命令行下,提供一个命令
- 全局安装 -g (他只能在命令行下使用)
```
npm install http-server -g
```

> 全局安装不会配置到环境变量中，由于npm已经在环境变量中了，相当于在npm下有一个快捷方式连接真是的文件

### nrm
```
npm install nrm -g (nrm可以帮助我们切换安装的源头 淘宝 中国源)
```
- 列出所有源
```
nrm ls
```
- 使用源
```
nrm use taobao
```

### http-server
- 启动一个服务，观看页面
```
http-server -p 3000
```
- 本地安装 (在当前项目下使用)
初始化一个package.json不会导致安装到上一层级
```
npm init -y
```
### package.json 可以记录安装过哪些东西
```
npm install jquery --save 项目依赖
npm install babel-core --save-dev 开发依赖
npm uninstall jquery -save 卸载
npm uninstall babel-core --save-dev 卸载
```
### 查看版本号
```
npm info 包名（多个模块组成一个包）
```
### 安装某个版本
```
npm install jquery@2.2.0 --save
```
### 安装所有依赖
```
npm install 
```

> 默认安装时会在当前目录查找node_modules文件，如果没有则向上找，上面有就会安装到上一层，如果没有则安装到当前文件夹下

## yarn
```
npm install yarn -g
```
- 初始化package.json
```
yarn init -y
```
- 安装
```
yarn add jquery@2.2.0 默认就是项目依赖
yarn add babel-core --dev 开发依赖
yarn remove jquery 删除
```
- 默认安装全部依赖
```
yarn install
```

## 自己开发第三方模块 （上传到npm 官网上）
- 包里需要什么？ package.json 入口文件 README.md

##  发包需要在官网上发送包
```
nrm use npm
npm addUser 登录账号没有则是注册

```
## 发布
```
npm publish
npm unpublish --force 取消发布包
```

> 升级内容 需要重新更改版本,注：当前项目不能和要安装的项目,名字相同ENOSELF


## 可以配置scripts脚本
- 配置一些快捷命令,配置了快捷键
```
"scripts": {
    "start": "node use.js",
    "dev":"node use.js"
}
```
### 使用第三方模块
```
//使用第三方模块,第三方模块直接引用名字即可
let result = require('jw-pack-handsome');
//会自动去当前node_modules下查找同名的文件，找到package.json 执行对应main文件，如果自己家没有会自动向上查找，找到根目录位置
// console.log(result);
console.log(module.paths);
//一般第三方模块全部安装在当前目录,
// 如果是文件模块可以自动添加js后缀 require('./a')
```
### 继承
```
let util = require('util');
//1.原生js中的继承
function Parent() {
    this.drink = '喝酒';
}
Parent.prototype.eat = '吃饭';
function Child() {

}
//一.儿子继承父亲
//1.既要私有 也要公有 不能穿参数
//Child.prototype = new Parent();
//2.既要私有 Parent.call(this); 在儿子类中调用父类，改变执行的this指向
//3.子类继承父类公有属性 Object.create()
function create(parentPrototype) {
    function Fn() {}
    Fn.prototype = parentPrototype;//将当前父类的原型 赋予给Fn这个函数
    return new Fn();
}
//Child.prototype = create(Parent.prototype);

//4. 子类继承父类公有属性
// Child.prototype.__proto__ = Parent.prototype;

//5.es6常用继承 只继承公有属性  extends Class
//Object.setPrototypeOf(Child.prototype,Parent.prototype);

//6.node继承 继承公有属性
util.inherits(Child,Parent);
let child = new Child();
console.log(child.eat);
```
### 判断数据类型
```
// 1.typeof不能比较对象数据类型
// 2.instanceof 不能去分实例
// 3.constructor 看当前实例的构造函数
// Object.prototype.toString.call()
// console.log(Object.prototype.toString.call(undefined));
```
### 可以检测数据类型
```
util.isArray([]);
util.isFunction(function () {});
...
```
### 发布订阅
- 绑定事件 订阅 是一种一对多的关系
```
Girl.prototype.on = function (eventName,callback) {
    if(this._events[eventName]){  //已经有了
        this._events[eventName].push(callback)//{失恋:[cry,die]}
    }else{//当前一对多的关系中没有这个数组
        this._events[eventName] = [callback]; //{失恋:[cry]}
    }
};
```
### 发射事件 发布
```
Girl.prototype.emit =function (eventName,...ary) { //剩余运算符，将其他参数转化成数组
    //let arr = Array.prototype.slice.call(arguments,1);
    //es6中将类数组转化成数组
    //Array.from(arguments).slice(1);
    if(this._events[eventName]){
        this._events[eventName].forEach((item)=>{//箭头函数中没有this指向，当前this指向上一级的this
            item.call(this,...ary);//拓展运算符 将数组展开 [a,b,c,d] => a,b,c,d
            //item.apply(this,ary);
        });
    }
};
```
- once相当于 执行完emit后就删除掉这个绑定
