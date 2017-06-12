#vue入门
2017/6/7

@(框架)

######vue:专注前端的框架；

####MVC
- model  数据
- view   视图
- controller 控制器

M(model)->数据或模板-库  V(view)->视图  C(control)->后台语言写的  node  php   java

MVC是一种模式更是一种思想。应用于前后端整体架构，也能在单纯的前端使用；

M 专门写处理数据的js, V 专门写我们的dom操作 C 专门写我们的交互

MVC思想实现前端主流框架的是react，他是一个不完整的MVC，主要作用是前端view层的优化，并不是直接控制dom，而是产生虚拟dom对象，在没有真正完成dom结构处理的时候，一直处理的都是我们虚拟的dom，当开发者真正处理好dom业务的时候，通过render再真正添加react产生的dom中的事件


####MVVM mvp mv*....
######前端mvvm思想实现框架  vue/ng
- model
- view 
- viewModel

|M->model | V->view | VM->viewmodel|
|:--:|:--:|:--:|:--:|
|数据  |  视图   |   数据视图，视图和数据的连接器，中转和沟通的媒介模板，（数据的双向绑定）|
V(view前端视图)<==>VM<==> M(数据)
我们通过我们VM思想，在我们html中数据发生改变的时候，js中的数据也发生了改变
vue  响应式思想：一个变另一个也跟着变；

####安装vue npm,bower,yarn...
- 安装前初始化package.json,主要用来描述自己的项目，记录安装过的文件有哪些,在当前文件下生成json,名字不能叫要安装的文件
```
npm init -y 
```
- #####安装vue 
--save或者-S代表项目依赖 --save-dev或者-D开发依赖
```
npm info vue
npm install vue -S
```

- 安装后默认会生成node_modules文件夹
- 上传到git上node_modules是忽略掉的，拉下代码后 需要重新npm install 安装依赖

####示例

#####vue的模板用法，只需要引入js文件即可
+ vue的代码，进行vue的实例化
+ 面向对象思想，构造函数，在实例化过程中，我们给vue的构造函数传入一个对象
+ el属性的作用，就是把html结构实例化到jsvue对象（实例）中，实例化后的dom节点包括他的子节点，都是vue的dom节点了，他们都可以调用vue的属性和方法

```
<div id="box" v-if="see" v-bind:title="msg" v-on:click="fn" >
    <p>{{msg}}</p><!-- {{}}=>是vue表达式写法，是定界符（可以用变量来理解，其实是属性）-->
    <span v-for="item in lists">{{item.text}}</span>
</div>
```

```
var vBox = new Vue({
        el: '#box',
        data: {
            msg: '这是一个实例化的属性',//给vue添加了一个msg属性，他是一个可以在html结构中调用的‘变量’
            see:true,
            lists:[{text:'文本1'},{text:'文本2'},{text:'文本3'}]
        },
        methods: {
            fn: function () {
                console.log(1);
            },
        }
    });
```