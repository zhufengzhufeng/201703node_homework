###  MVC
- model  数据
- view   视图
- controller 控制器
### MVVM mvp mv....
- model
- view
- viewModel
### 安装vue npm,bower,yarn...
- 安装前初始化package.json,主要用来描述自己的项目，记录安装过的文件有哪些,在当前文件下生成json,名字不能叫要安装的文件

```
npm init -y 
```
## 安装vue 
--save或者-S代表项目依赖 --save-dev或者-D开发依赖

```
npm info vue
npm install vue -S
```
## 安装后默认会生成node_modules文件夹
- 上传到git上node_modules是忽略掉的，拉下代码后 需要重新npm install 安装依赖
 
##  api
- v-text {{}}
- v-html
- v-model 
- v-once
- v-on:click -> @click
- v-for
- v-if/v-show


```
<!--小胡子语法 取值表达式 -->
    {{msg}} {{age}}
    
// 一段落json + 一块html即可    
//引用vue 可以提供一个Vue的构造函数  
//用之前先声明 在使用，不能新增不存在的属性, Object.defineProperty,vue不兼容ie8以下版本包括ie8
 el:'#app', //el指定的元素不能是html 或者body,querySelector
 
 //vm可以代理data属性
    console.log(vm.name);
 data://数据类型  boolean number string undefined null object array function
 
```
### V-代表的是指令
- 用大括号会导致闪烁问题--解决办法 v-text
- 等待数据加载好后将内容 将内容插入到div中
- 1.可以放三元表达式
  - <div v-text="msg?true:false"></div>
- 2.可以赋值
  - <div id="box" v-text="msg=20"></div>
- 3.最终的结果需要有返回值
### input的特点 可以展现数据 可以修改数据
- v-model 只能绑定变量 先将对应的数据 放到输入框的value值上
- v-model 会监听输入框的输入事件 oninput ,将值放回到数据中
- 被v-once包住的属性 就不会再发生变化
  - <div v-once>{{msg}}</div>
- 绑定html元素
  - <div v-html="msg"></div>
    -  msg:'<h1>hello</h1>'
     
### method
- 默认的onClick会带一层函数 这个函数中 写的内容是 你写的东西 如果只写一个a 则没变化，写了a()才会调用a函数
- 函数执行时 带括号 一般是传递参数，会丢失event源，可以手动传递属性$event
  - <button @click="a($event)">点我啊</button>
- v-on在事件中可以简写成@符号

```
<!--写一个输入框 在这个输入框中写入内容，当点击回车时 弹出输入框的内容-->
    <input type="text" @keyup.13="fn" v-model="msg">
    
<script>
    var vm = new Vue({
        el:'#app',
        data:{
          msg:1
        },
        //function
        methods:{ //放所有函数
            a(e){ //写普通函数
                console.log(e);
                //函数中的this指向的都是vm
            },
            fn(){
               alert(this.msg)
            }
        }
    });
</script>    
```
### v-for  (想循环谁 就写在谁的身上)
- 数组中a in xxx ,那么a的值是 数组里的value
- 对象中f in xxx ,那么f的值是 对象里的value
- (value,key) in xxx

```
<div id="app">
<ul>
        <li v-for="(fruit,pindex) in fruits">
            {{fruit.name}}
            <ul>
                <li v-for="(c,index) in fruit.color">{{pindex}}.{{index}}{{c}}</li>
            </ul>
        </li>
    </ul>
</div>
<script>
    var vm = new Vue({
        el:'#app',
        data:{
            //fruits:['香蕉','苹果','西瓜','荔枝']
            fruit: {name:'香蕉',color:['绿色','黄色']},
            fruits:[
                {name:'香蕉',color:['绿色','黄色']},
                {name:'苹果',color:['红色','黄色','青色']},
                {name:'西瓜',color:['黄色']}
            ]
        }
    })
</script>
```
### v-if 和v-show [什么时候使用]
- v-if 有阻断作用，当外面的条件不满足时，内部代码不在执行
- v-show 频繁显示隐藏
 
+ data里的属性 和 methods 名字不能重复，可能会被覆盖掉
 
# bootstrap 案例

#### 阻止默认事件
- e.cancelBubble = true
- e.stopPropagation()

#### 阻止事件冒泡
- .stop.xxx.xxx修饰符
#### 事件捕获
- capture捕获
- self 只在自己身上触发
- once只触发一次
- prevent只触发一次
- 键盘修饰符 @keyup / @keydown

```
<a href="http://www.baidu.com" @click.prevent.stop="son">go bd</a>
    <div @click="parent">
        父亲
        <div @click.once="son">
            儿子
            <div @click="grandson">
                孙子
            </div>
        </div>
    </div>
</div>
<script>
    var vm = new Vue({
        el:'#app',
        methods:{
            parent(){
                alert('父亲')
            },
            son(){
                alert('儿子')
            },
            grandson(){
                alert('孙子');
               //e.cancelBubble = true
               //e.stopPropagation();
            }
        }
    })
</script>
```
### bind
- 如果想将内容绑定在标签上 需要使用: 不能是用{{}}
  - <div :title="title">我很shuai</div>
- style 比较特殊 绑定对象的方式 数组的方式
  - <div :style="[s1,s2]">vue</div>
-  class 绑定对象和数组 (绑定的class 和原生的不冲突  如果冲突:号会覆盖普通的class)
  - <div :class="['color','background',{'back':true}]">react</div>
  - <div :class="{'color':true,'background':true}" class="a">angular</div>
### 数组常用方法 pop push shift unshift slice splice sort concat join reverse indexOf 
## map forEach find some filter reduce
```
/1.find 查找 返回找到的那一项 仅是一个
//打开新项目 1.需要配置node环境 setting -> node
//          2.配置es6语法 setting-> language
let arr = [{name:'zfpx'},{name:'hello'},{name:'word'},{name:'zfpx'}];
let username = 'zfpx1';
let obj = arr.find(function (item,index) {
    //如果在这个函数中返回true 会将这一项返回如果没有true 则返回undefined
    return username===item.name; //找到后则返回
}); //改变this指向
console.log(obj);

//2.some返回的是boolean类型，[5,6,11].includes(11);// 简易的判断是否包含这一项
let newArr = [5,6,11];
let flag = newArr.some(function (item,index) {
    return item>11;
});
console.log(flag); //声明式 => vue 声明式

//3.map 映射 映射可以将一个数组变成另一种方式显示 ,返回新数组
let arrLis = [{name:'zfpx',age:8},{name:'jw',age:18}];
let oLis =arrLis.map(function (item,index) { //修改和映射的功能
    return  `<li>${item.name}${item.age}</li>`;
});
console.log(oLis.join(''));

//4.filter 过滤 如果函数中返回true 则将这一项放到新数组中
let filterArr = [{name:'zfpx',age:8},{name:'jw',age:18}].filter(function (item,index) {
    return item.name !== 'jw';//如果给你某一项 让你删除掉，条件都是!==
});
console.log(filterArr);

//5.reduce 可以返回叠加后的结果
let result = [1,2,3,4,5].reduce(function (prev,next,index,arr) {
    console.log(prev,next,index,arr);//下一次会将当前这次的结果作为下一次的上一次
    return prev + next;
});
console.log(result);
let res = [{price:10},{price:20},{price:30}].reduce(function (prev,next,index,arr) {
    return prev + next.price;
},0);//第二个参数 可以手动指定第一次的prev;
console.log(res);

//6.forEach(确定不能return) for in(可以遍历数组,数组外的属性依然可以获取) for of (只会遍历数组中的内容，可以break；不能遍历对象)
let arrs = {name:1,age:2}; //将对象转化成数组 Object.keys(arrs);
//arrs.a = 100;
for(let val of Object.keys(arrs)){
    console.log(arrs[val]);
}
//Object.keys 对象有几个属性
let school = {name:1,age:2,add:3};
if(Object.keys(school).length===3){

}
//[[1,2,3],[4,5],[7,7]] => [1,2,3,4,5,7,7] 展开运算符
let newArrs = [[1,2,3],[4,5],[7,7]].reduce((prev,next)=>[...prev,...next]);
console.log(newArrs);
```
## 展开运算符 就像扩展参数列表一样，...可以在数组字面量中的任何地方使用，可以多次使用。
- 在需要使用数组作为函数的参数的情况下,通常使用 Function.prototype.apply

```
function myFunction(x, y, z) { }
var args = [0, 1, 2];
myFunction.apply(null, args);
```
- 使用了ES6的展开运算符,可以这么写:

```
function myFunction(x, y, z) { }
var args = [0, 1, 2];
myFunction(...args);

还可以同时展开多个数组:

function myFunction(v, w, x, y, z) { }
var args = [0, 1];
myFunction(-1, ...args, 2, ...[3]);

```

- 只要页面上有任意一个数据 刷新 都会导致sum重新执行 ,不要再{{}}直接让函数执行
  - 有需要写成{{sum()}} 一定用computed代替
  - sum虽然写成函数类型 但是依然是一个属性
  ```
  sum(){  //这样写 默认调用了 get方法
                  return this.price*this.count;
              }
  ```
- computed 计算属性 不能和data，methods的名字冲突
  - 直接在html中使用{{}}包起来的函数,每当页面中任意一个数据变化,都会被执行,使用computed来解决,而不放在methods中
  - 放在computed属性里的函数是一个属性,在页面调用时,以变量的形式调用,不加()【因为写成函数的形式,默认调用了属性的get()方法,所以设置的是属性,而不是函数,输入的函数代码是放在属性里的get()方法中的】
  - 如果有需要写{{函数}},必须放在computed中,而不用methods 
- watch 
  - 与computed类似
  - 可以夹杂异步逻辑
  - 当一个值变化时,执行某个动作用watch比computed方便
  - watch默认只监控一层,可以监控数组的变化,但数组中的对象的变化无法被监控(给对应的属性增加一个属性deep:true,可以进行深层监控)
-  directives
  - 指令
  - 在html中使用"-"连接单词,并且使用"v-"开头
  - 在js代码中使用驼峰命名法,不用加"v-"
  - 在JS中自定义属性传入两个参数
    - el:绑定这个自定义属性的元素
    - bindings:一个属性对象
      - value:代表的是指令对应的值v-xxx="值"
-  created
  - 当vue创建时执行的方法
- 属性
  - 属性由两部分组成,set()和get()
  - get() ：获取属性时,执行的函数
  - set() : 设置修改属性时,执行的函数,可以印象其他值的改变,一般较少使用
  
- 箭头函数  
  - 高阶函数,存在多重返回值,表现形式为存在多个箭头
  - 注意点：1.如果参数只有一个,可以省略括号
  - 2.如果有大括号必须写return,没有大括号就不需要return
  
- 路由
- 通过路径的变化,显示不同的内容
- hash值
    - 通过window.hashchange二级事件来监控hash值的改变
    - 通过window.location.hash可以获取当前的hash值(#xxx),手动把#去掉
- 浏览器自带的history
    - 如果想要使用history.pushState是需要后台支持的(页面不存刷新会导致404),开发时使用hash的方式,上线可以改成pushState
```
window.history.go(-1);
    window.history.back(-1)
    window.history.pushState({},null,'/aaa');//路径可以存在也可以不存在
```
- 本地存储
- localstorage
    - 可以将数据存储到浏览器中
    - h5的新特性,cookie
    - localStorage.setItem("key","value")
    - localStorage.getItem("key")
- promise   
 1. promise是Promise的实例,并传入一个回调函数
 2. 这个回调函数有两个形参,resolve,reject都是函数类型
 3. 当new Promise是内部的函数会立刻执行
 4. 实例上就会增加一个then方法
 - 三个函数
     - then
         - 可以放置一个成功和一个失败函数
         - 当resolve和reject没有被执行时,then中的函数永远不会被执行,因为没有成功也没有失败
     - resolve
     - reject



- checkbox 值根据v-model的值是true还是false做为是否选中  
```
全选按钮 <input type="checkbox" @click="fn" v-model="all"> <br>
```
