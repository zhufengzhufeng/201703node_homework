
## vue + react
- vue + vue-router + vuex + axious + webpack + es6

## 数组常用方法
pop push shift unshift slice splice sort concat join reverse indexOf 

##  vue中常用的数组方法：
map forEach find some filter reduce

## Vue是一套构建用户界面的渐进式 框架。

安装VUe:前期学习就是应用最简单的功能，也是轻量型的模板，组件；

## MVC 双向运行
- model  数据
- view   视图
- controller 控制器

## MVVM mvp mv*....
- model
- view 
- viewModel

## bower是前端的包管理

- 安装bower：npm install bower -g

- 查看vue版本:bower info vue

下载安装vue: 


## 安装vue npm,bower,yarn...
- 安装前初始化package.json,主要用来描述自己的项目，记录安装过的文件有哪些,在当前文件下生成json,名字不能叫要安装的文件
```
npm init -y 
```

## 安装vue 
--save或者-S代表项目依赖 --save-dev或者-D开发依赖 （上线就不需要）
```
npm info vue
npm install vue -S
```
- 通过npm安装
npm install vue@1.0.28
- 通过过bower安装
bower install vue#1.0.28 --save
 不指定版本默认下载最新版本


## 安装后默认会生成node_modules文件夹
- 上传到git上node_modules是忽略掉的，拉下代码后 需要重新npm install 安装依赖

##  API

- v-text {{}}
- v-html
- 
- v-model 
```
<div id="app">
    <!--input的特点 可以展现数据 可以修改数据-->
    <!--v-model 只能绑定变量 先将对应的数据 放到输入框的value值上-->
    <!--v-model 会监听输入框的输入事件 oninput ,将值放回到数据中-->
    <input type="text" v-model="msg">
    <!--被v-once包住的属性 就不会再发生变化-->
    <div v-once>{{msg}}</div>
    <!--绑定html元素-->
    <div v-html="msg"></div>
</div>

    var vm = new Vue({
        el:'#app',
        data:{
            msg:'<h1>hello</h1>'
        }
    });
```

- v-for 循环
```
<div id="app">
    <!-- v-for 想循环谁 就写在谁的身上 -->
    <<!--ul>
        <li v-for="(val,index) of fruits">{{index+1}}{{val}}</li>
    </ul>-->
    <ul>
        <li v-for="(fruit,pindex) in fruits">
            {{fruit.name}}
            <ul>
                <li v-for="(c,index) in fruit.color">{{pindex}}.{{index}}{{c}}</li>
            </ul>
        </li>
    </ul>
    <ul>
        <li v-for="(f,key) in fruit">{{f}} {{key}}</li>
    </ul>
  <!--  数组中a in xxx ,那么a的值是 数组里的value
       对象中f in xxx ,那么f的值是 对象里的value
    (value,key) in xxx-->
</div>

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

```
- v-if/v-show 判断
```
<div id="app">
    <input type="text" v-model="fruit">
    <button @click="addFruit">添加水果</button>
    <ul>
        <li v-for="val in fruits">{{val}}</li>
    </ul>
  <!--  提示 当水果种类大于8种的时候 提示太多了
    提示 当水果种类大于5种小于8种提示的时候 提示还可以
    提示 当水果种类其他时提示 提示太少
    操作的是dom的移除 和新增 v-if操作的是结构-->
    
    <!--v-show不满足条件 操作的是样式-->
    <div v-show="fruits.length<5">太少了</div>
    <div v-show="fruits.length>=5&&fruits.length<=8">还可以</div>
    <div v-show="fruits.length>8">太多了</div>
    <!--什么时候使用v-if 有阻断作用，当外面的条件不满足时，内部代码不在执行 什么时候使用v-show 频繁显示隐藏 选择v-show-->
    <div v-if="false">
        <ul>
            <li v-for="val in fruits">{{val}}</li>
        </ul>
    </div>
</div>

    var vm = new Vue({
        el:'#app',
        data:{ //data里的属性 和 methods 名字不能重复，可能会被覆盖掉
            fruits:['香蕉','苹果','橘子'],
            fruit:''
        },
        methods:{ //是一个数据驱动，操作的是数据，数据改变视图刷新
            addFruit(){
                this.fruits.push(this.fruit);
            }
        }
    })
```
- v-once  
- v-on:click -> @click

 
## 修饰符
修饰符  @click.xxx
```
.stop.xxx修饰符  阻止冒泡
.13.37.38.39.40 键盘事件（enter，left，up,right,down）
 键盘修饰符 @keyup / @keydown
 .prevent  阻止默认跳转
  .stop 阻止冒泡
 .self 自己 只在自己身上触发
 .once 只触发一次
 .captain捕获

```
```
 <div id="app">
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
```

### 动态绑定
- v-bind:属性="变量" -> :属性="变量"

- class style 对象和绑定 数组绑定
```
<div :class="['样式1',变量1]"></div>
<div :class="{'样式1':true,"样式2":false}"></div>
<div :style="{color:'red',background:'blue'}"></div>
<div :style="[行内样式对象1,行内样式对象2]"></div>

       .color{
            color:red
        }
        .background{
            background: green;
        }

<div id="app">
    <!--如果想将内容绑定在标签上 需要使用: 不能是用{{}}-->
    <div :title="title">
        我很帅
    </div>
    <img :src="src" alt="" :width="width" :height="width">
    <!-- style 比较特殊 绑定对象的方式 数组的方式-->
    <div :style="[s1,s2]">vue</div>
    <div :style="s1">vue</div>
    <!-- class 绑定对象和数组 -->
    <div :class="['color','background',{'back':true}]">react</div>
    <div :class="{'color':true,'background':true}" class="a">angular</div>
    <!--:绑定的class 和原生的不冲突  如果冲突:号会覆盖普通的class-->
</div>

    var vm = new Vue({
        el:'#app',
        data:{
          title:'标题',
          s1:{background:'red'},
          s2:{color:'blue'},
          src:'http://blog.fullstackjavascript.cn/static/upload/20170605/logo.jpg',          width:'100px',
          height:'200px'
        },
        methods:{

        }
    })
```

## vue使用

```
<div id="app">
    <!--{{}}小胡子语法 取值表达式 -->
    {{msg}} {{age}}
</div>
<script src="./node_modules/vue/dist/vue.js"></script>
<script>
    // 一段落json + 一块html即可
    //引用vue 可以提供一个Vue的构造函数
    //用之前先声明 在使用，不能新增不存在的属性, Object.defineProperty,vue不兼容ie8以下版本包括ie8
    let obj = {msg:'hello world',age:0};
    let vm = new Vue({//Vue的实例可以创建多个 但是正常情况下只有一个
        el:'#app', //el指定的元素不能是html 或者body,querySelector
        data:obj
    });
    obj.age = 100;
    //vm可以代理data属性
    console.log(vm.name);
</script>
```
## 表达式
```
<div id="app">
    <!--v- 代表的是指令-->
    <!--用大括号会导致闪烁问题 v-text -->
    <!--等待数据加载好后 将内容插入到div中-->
    <div v-text="msg?true:false"></div>
    <!--1.可以放三元表达式-->
    <!--2.可以赋值-->
    <!--3.最终的结果需要有返回值-->
</div>

    //Vue的实例可以创建多个 但是正常情况下只有一个
    let vm = new Vue({
        el:'#app',
        data:{//数据类型  boolean number string undefined null object array function
            msg:'hello'
        }
    });
```
## method 
```
<div id="app">
    <!--默认的onClick会带一层函数 这个函数中 写的内容是 你写的东西 如果只写一个a 则没变化，写了a()才会调用a函数-->
    <!--函数执行时 带括号 一般是传递参数，会丢失event源，可以手动传递属性$event-->
    <!--v-on在事件中可以简写成@符号-->
    <button @click="a($event)">点我啊</button>
    <!--写一个输入框 在这个输入框中写入内容，当点击回车时 弹出输入框的内容-->
    <input type="text" @keyup.13="fn" v-model="msg">
</div>

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
```
## watch
```

<div id="app">
    价格 ：{{price}} <br>
    姓名 ：<input type="text" v-model="name">
    数量 ：<input type="text" v-model="count">
    <!--只要页面上有任意一个数据 刷新 都会导致sum重新执行 ,不要再{{}}直接让函数执行-->
    <!--computed 计算属性 不能和data，methods的名字冲突-->
    {{sum}}
</div>

    let vm = new Vue({
        el:'#app',
        data:{
            price:30,
            name:'我很帅',
            count:1
        },
        //如果有需要写成{{sum()}} 一定用computed代替
        computed:{
            // 属性由两部分组成 set  get
            sum:{ //sum虽然写成函数类型 但是依然是一个属性
                get(){
                    return this.price*this.count;//根据price和count计算来的
                },
                set(val){//设置sum的值
                    console.log(val); //在set中可以去影响其他值的改变
                    this.name = val;
                }
            },
           /*sum(){  //这样写 默认调用了 get方法
                return this.price*this.count;
            }*/
        },
    })
```


## 属性的计算

- 用于计算性属性(默认为属性的get方法)
```
var vm = new Vue({
    data:{
        name:'zfpx'
    },
    computed: {
        hello: function () {
            return this.name+8;
        }
    }
});
vm.$mount('#app');
```
- 属性的获取和设置
```
var vm = new Vue({
    data:{
        name:'zfpx'
    },
    computed: {
        hello:{
            get: function () {
                return this.name+8;
            },
            set: function (val) {
                this.name = val
            }
        }
    },
});
```


