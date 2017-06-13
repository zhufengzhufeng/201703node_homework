####  React 和 Vue 有许多相似之处，它们都有：
 - 使用 Virtual DOM
 - 提供了响应式（Reactive）和组件化（Composable）的视图组件。
 - 将注意力集中保持在核心库，而将其他功能,如路由和全局状态管理交给相关的库。
  性能:
   React 和 Vue 在大部分常见场景下都能提供近似的性能。通常 Vue 会有少量优势，因为 Vue 的 Virtual DOM 实现相对更为轻量一些。

####  VUE介绍：
 - MVVM框架（Model-View-ViewModel），易学，轻量，灵活。  
   ViewModel是Vue.js的核心，它是一个Vue实例。
   
 - MVC是一种模式更是一种思想。他的应用不仅仅局限于我们的前后端整体架构。在我们单纯的前端也可以使用；   
   M：处理数据，专门写处理数据的js  
   V：专门的我们的DOM操作  
   C：专门写我们的交互。  
   理由mvc思想实现前端主流框架，是我们react。但是它是一个不完整mvc框架，他主要做的是前端view层优化，实现了并不是直接控制我们的DOM，而是产生虚拟DOM对象，在我们没有真正完成我们的DOM结构处理的时候，他都是一直处理的我们虚拟DOM。
   
 - vue和angular简单对比
   + vue--简单，易学
     + 指令以v-xxx,属性方法均挂在Vue的实例上，使用于移动端项目
   + angular-学习曲线陡峭
     + 指令以ng-xxx，属性方法均挂在$scope上，使用于pc端项目
+ 都不支持IE8以及其一下版本
####  vue版本1.0&2.0
+ 查看版本
  + bower info vue
  + npm info vue
+ 下载vue
  + 安装前初始化package.json，主要用来描述自己的项目，记录安装过的文件有哪些,重新再当前目录下生成json
  > nmp init -y
  + 通过npm安装,
  > --save或者-S代表项目依赖  
  > --save-dev或者-D开发依赖  
  > npm install vue@1.0.28
  + 通过过bower安装
  > bower install vue#1.0.28
> 不指定版本默认下载最新版本
####  vue简单用法：使用Vue的过程就是定义MVVM各个组成部分的过程的过程。
 1）定义View  
 2）定义Model  
 3）创建一个Vue实例或"ViewModel"，它用于连接View和Model  
 
 1、创建一个vue实例:前提要引入vue.js
```html
    <div id="app">                      <!--html-->
     <!--一块json+html-->
     <!--用大括号会导致闪烁问题 加v-text命令-->
     <!--小胡子语法 取值表达式 -->
        {{msg}}
    </div>
```
```javascript
//在创建Vue实例时，需要传入一个选项对象，选项对象可以包含数据、挂载元素、方法、模生命周期钩子等等。
   var vue = new Vue({                  //script
       el:'#app',      //挂载元素 不能是html，body
       data:{       //数据类型  boolean number string undefined null object array function
            msg:'welcome to zfpx' //将要写到html页面中的内容
       }
   })
```
####  MVVM双向数据绑定
- 双向数据绑定，必须满足视图可以更改，在表单元素中才能更改，用input  textarea;

```html
<div id="app">                          <!--html-->
     <!--双向数据绑定 需要一个指令  所有的表单元素都需要增加v-model属性 只能绑定变量-->
    <input type="text" v-model="msg">
       {{msg}}
       <!--{}叫表达式 支持赋值 常用方式三元表达式 运算 最终结果要有返回值 不支持逻辑if else -->
       
       <!--绑定一次 1.0的写法-->
       {{*msg}}
       
       <!--绑定一次 2.0的写法-->
    <div v-once>{{mas}}</div>
    
       <!--如果我们绑定的数据 是html-> 标签 2.0的写法-->
    <div v-html="msg"></div>
    
       <!--如果我们绑定的数据 是html-> 标签 1.0的写法-->
       {{{msg}}}
</div>
 ```
   ```javascript
var vue = new Vue({                     //script
    el:'#app',
    data:{
        msg:'welcome to zfpx', //将要写到html页面中的内容
        age:0
    }
})
```
####  数据绑定ary

```html
<div id="app">                          <!--html-->
    <ul>
        <!--(a)变量代表的就是arr中的某一个 1.0写法-->
        <li v-for="(index,val) in arr" track-by="$index">   
        <!--在2.0版本中没有声明过的$index不能使用，说明track-by就废弃掉了-->   
            {{$index}} {{index}} {{val}}
        </li>

        <li v-for="(val,index) in arr">
        <!--2.0中的for循环更趋近于我们原生js中的arr.forEach(function(item,index){})-->   
        {{val}} {{index}}
        </li>
    </ul>
    <!--遍历数组时，需要加track by = $index 避免重复项-->
</div>
```
```javascript
new Vue({                               //script
    el:'#app',
    data:{
       arr:['iphone6','iphone7']
    }
})
```
####  绑定数据obj
```html
<div id="app">                         <!--html-->
    <ul>
    <!--val代表的是obj中的值 1.0用法-->
        <li v-for="(key,val) in obj">
            {{val}} {{$index}}{{key}}
        </li>
        <!--2.0中没有声明的变量不能直接使用-->
        <li v-for="(val,key) in obj">
            {{val}} {{key}}
        </li>
        <!--如果v-for不使用() 那就是value，使用小括号在1.0中是key，val；在2.0中是value，key-->
    </ul>
</div>
```
```javascript
var vm = new Vue({                      //script
    el:'#app',
    data:{
        obj:{
            name:'zfpx',
            age:8,
            address:'回龙观东大街'
        }
    }
})
```
####  绑定事件
```html
<div id="app">                          <!--html-->
       <!--默认的onClick会带一层函数 这个函数中 写的内容是 你写的东西 如果只写一个a 则没变化，写了a()才会调用a函数-->
       <!--函数执行时 带括号 一般是传递参数，会丢失event源，可以手动传递属性$event-->
       <!--v-on：可以简写为@符号-->
    <button @click="fn($event)">点击增加</button>
    <li v-for="iphone in arr">
        {{iphone}}
    </li>
    <!--默认事件时冒泡的 .stop.xxx.xxx修饰符-->
        <!--capture捕获-->
        <!--self 只在自己身上触发-->
        <!--once只触发一次-->
        <!--prevent只触发一次-->
        <!--键盘修饰符 @keyup / @keydown-->
</div>
```



```javascript
//加括号 一般用于传递参数，如果传递参数要手动增加e 
var vm = new Vue({                      //script
    el:'#app',
    data:{
       arr:['iphone6','iphone7']
    },
    methods:{
        fn(e){
            //所有方法中的this指向的都是实例vm
            this.arr.push('iphone8');
        }
    }
});
//所有的数据都会挂载在实例上
console.log(vm.arr);
```

####  show-if
```html
<div id="app">
    <!--真的消失 样式上的消失-->
    <!-- v-show 如果为false 则display：none 如果频繁切换显示或者隐藏我们就使用v-show -->
    <!-- v-if 如果为false 则removeChild 不频繁切换时、判断数据是否存在用v-if -->
    <div v-show="flag">是否为true，为true显示，否则消失</div>
    <div v-if="obj">
        {{obj.name}}
    </div>
</div>
```

```javascript
var vm = new Vue({
    el:'#app',
    data:{
        flag:false,
        obj:{name:1}
    }
});
```



####  vue的常用指令
Vue.js的指令是以v-开头的，它们作用于HTML元素，指令提供了一些特殊的特性，将指令绑定在元素上时，指令会为绑定的目标元素添加一些特殊的行为，我们可以将指令看作特殊的HTML特性（attribute）。  
 Vue.js提供了一些常用的内置指令：
 - v-html指令(2.0以上)
   + 当绑定的数据是html字符串时，展示成正常的html
 - v-once指令(2.0以上)
   + 有时候我们想让数据只绑定一次，当数据在更改时不会更新内容
   + 被v-once包住的属性，就不会再发生变化
 - v-model指令
   + 只能绑定变量，先将对应的数据放到输入框的value值上
   + 会监听输入框的输入事件 oninput，将值放回到数据中
 - v-if指令
   + v-if是条件渲染指令，它根据表达式的真假来删除和插入元素，它的基本语法如下：   v-if="expression"
   + expression是一个返回bool值的表达式，表达式可以是一个bool属性，也可以是一个返回bool的运算式。
   + 注意：v-if指令是根据条件表达式的值来执行元素的插入或者删除行为。
 - v-show指令
   + v-show也是条件渲染指令，和v-if指令不同的是，使用v-show指令的元素始终会被渲染到HTML，它只是简单地为元素设置CSS的style属性。
 - v-else指令
   + 可以用v-else指令为v-if或v-show添加一个“else块”。v-else元素必须立即跟在v-if或v-show元素的后面——否则它不能被识别。
   + v-else元素是否渲染在HTML中，取决于前面使用的是v-if还是v-show指令。
 - v-for指令
   + v-for指令基于一个数组渲染一个列表，它和JavaScript的遍历语法相似：
     v-for="item in items"
     items是一个数组，item是当前被遍历的数组元素。
     v-for="(value,key) in obj"
     obj是一个对象，value是当前被遍历的对象中的属性值，key是属性名。
 - v-bind指令
   + v-bind指令可以在其名称后面带一个参数，中间放一个冒号隔开，这个参数通常是HTML元素的特性（attribute）
   例如：v-bind:class
         v-bind:argument="expression"
 - v-on指令
   + v-on指令用于给监听DOM事件，它的用语法和v-bind是类似的，例如监听a元素的点击事件： 
     ```html
     <a v-on:click="doSomething">
     ```
   + 有两种形式调用方法：绑定一个方法（让事件指向方法的引用），或者使用内联语句。
   + 函数执行是，带括号一般是传递参数，如果不传参，会丢失event源；可以手动传递$event参数
##### v-bind和v-on的缩写:
- Vue.js为最常用的两个指令v-bind和v-on提供了缩写方式。
- v-bind指令可以缩写为一个冒号，v-on指令可以缩写为@符号。
```html
<!--完整语法-->
<!--:绑定的class 和原生的不冲突 如果冲突:号会覆盖普通的class-->
<a href="javascripit:void(0)" v-bind:class="activeNumber === n + 1 ? 'active' : ''">{{ n + 1 }}</a>
<!--缩写语法-->
<a href="javascripit:void(0)" :class="activeNumber=== n + 1 ? 'active' : ''">{{ n + 1 }}</a>

<!--完整语法-->
<button v-on:click="greet">Greet</button>
<!--缩写语法-->
<button @click="greet">Greet</button>
```







  
  

  
  
  


