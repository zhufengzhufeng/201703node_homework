Vue常用的指令

```

双向数据绑定只能用在input表单上
只要数据改变就会刷新视图
视图:就是html
数据:就是data


只要页面上有任意一个数据刷新会导致写在页面上的{{fn()}}
fn执行 所以一般不要{{fn()}}这样写,不要在{{}}里直接让函数执行

computed:计算属性,不能和data,methods的名字冲突
如果有需要写成{{fn()}}一定要用computed代替写成{{fn}}
只会根据自己函数里面依赖属性改变,才会执行方法




v-text
v-html 可以显示html标签
v-once 数据只会改变一次
v-if  后面是一个布尔值 
v-if   是根据条件表达式的值来执行元素的插入或者删除行为
v-show 根据条件表达式的值来显示或不显示元素 display值 

v-show 如果为false 则displjay:none 如果频繁切换显示或者隐藏 我们就使用v-show
v-if 如果为false 则removeChild 不频繁切换显示/判断数据是否存在

v-else 指令
可以用v-else指令为v-if或v-show添加一个“else块”
v-else元素必须立即跟在v-if或v-show元素的后面——否则它不能被识别。
前面的v-if/show为true 后面的v-else就为false 反之一样


v-for:  v-for="(item,index) in ary"
item数组的当前项,index当前索引
如果循环的是对象
item是当前项的值,index是属性名
要重复谁就在谁的身上写v-for



v-on:click='fn'--> @click='fn'
fn后面加了括号就必须传参,如果没写参数后面函数的的形参就是undefined
不加括号就没有向函数传参



v-bind
绑定我们vue的属性和默认的结构属性


自定义指令:
v-xx="值"
只要值发生改变就会触发指令



created(){
//当VUE创建完成时执行这里
//当vue创建完成还没有到页面中渲染数据时向本地读取数据
 },
 
 

```
## 修饰符
```
@click.xxx
@keydown.13

.stop    :阻止当前元素的事件冒泡
.capture :当前元素绑定的方法在捕获阶段触发
.keyCode :按下指定的哪一个键
.once  当前元素绑定的事件只触发一次
.prevent 提交事件不再重载页面
.self  只有当当前元素自己事件触发了才会执行绑定的方法



```
## 动态绑定
```
v-bind动态绑定指令,默认情况下标签自带属性的值是固定的
在为了能够动态的给这些属性添加值，可以使用v-bind:你要动态变化的值="表达式"


v-bind:属性="变量" --> :属性="变量"

<div :class="['样式1',变量1]"></div>
<div :class="{'样式1':true,"样式2":false}"></div>

<div :style="{color:'red',background:'blue'}"></div>
<div :style="[行内样式对象1,行内样式对象2]"></div>



<img src="" alt="" :width=w :height=h>
data: {
            w:"500px",
            h:"500px"
        }


```

## 组件
```
每个组件都有一个生命周期
组件必须由一个根节点包含

在路由中,当点击了路径,组件的生命周期才会开始    

组件化的好处
1.可复用
2.方便维护
3.减少逻辑复杂度
4.就近维护

组件分类
1.全局组件
2.局部组件
3.根组件
```
let vm = new Vue({el:'#app'})
```

大小写问题
html中都采用短杠命名法 aaa-bbb
在JS中可以用aaa-bbb 或 aaaBbb

```
## 组件之间数据交互
```
父->子 通过属性传递给儿子.
儿子通过props来接收
props可写成数组也可写成对象

子->父 通过事件 自定义事件(类似发布订阅)
@xxx = 'fn' 

xxx:是自定义事件
fn是父级的一个方法
在子集里面可以通过this.$emit(xxx,this.x)触发xxx事件
this.x:是子集上的一个属性可以传递到父级xxx绑定的方法中


任意组件间的交互,通过发布订阅模式
创建一个组件,两个组件都是用这个组件的$emit $on
如:创建的组件为vm = new Vue({})

vm.$on(xxx,function(data){ })来监听xxx事件
vm.$emit(xxx,this.xxx)在触发xxx事件,并传递xxx数据

```
## slot
```
留好放置内容的位置,当使用是放到对应的位置即可
在模板名字标签内写的非标签文字内容
在模板里面通过slot空标签标签获取
在模板名字标签标签内的标签上加 slot='xxx'
在模板里面可以通过<slot name='xxx'></slot>
slot的name属性获取


```
## is
```

 <component :is="xxx"></component>

会根据is后面值(模板的名字)选择相应要渲染的模板

使用keep-alive标签包裹后会读取缓存

```

## 路由
```javascript

需要安装vue-router包

 let router = new VueRouter({
       routes:[]
  });

 let vm = new Vue({
        el: '#app',
        router
    })
    
创建一个router放在实例中

routes 是一个数组,里面的每一项都是一个对象
对象里面参数 {path:xxx,component:{
    template:'<div>这是一个组件</div>'
}}

path:要转跳的路径
component:要转跳的路径对应显示的组件

<router-link to="路径">xxx</router-link>
标签是一个渲染到页面中的是一个a标签
to是要转跳的路由

<router-view></router-view>
标签是把对应路径的组件渲染到页面中



```
## vue获取数据有两种方式 通过路由获取或者create


## 路由传递参数
```javascript

通过路径传递参数

在路径中写xxx/:xx/:xx
:代表必须有,但后面的xx变量是自己定义的
如:定义一个路径
{path:'/word/:id/:name',componed:{
    template:'<div>这是一个组件{{id}}{{name}}</div>',
    computed:{
        id(){
            return this.$route.params.id
        },
        name(){
            return this.$route.params.name
        }
    }
}}

<router-link to="/word/666/hj">文章一</router-link>
写了:id,:name两个变量word后面必须要传递两个参数,传一个就访问不到这个组件

传递的参数存储在组件的$route.params对象上;
this.$route.params.xxx

```

## 子路由
```JavaScript

子路由都写在父路由的路由的路径对象的children中
如定义一个子路由
{path:'/xxx',
component:{},
children:[{
    {path:'xx',component:{}} //在子路由的地址中不加/
}]
}

<router-link to="/xxx/xx">文章一</router-link>

```
## 路由的默认显示
```javascript


1.{path:'',component:{'展示的组件'}}
(1常用)
2.{path:'/',component:{'展示的组件'}
当访问的是/时跳转到展示的组件(用于重定向)
3.{path:'*',component:{'展示的组件'}}
当路径都匹配不到是展示组件(一般都是配置404)
这个路径放到最后面
```

## 路由全局方法
```javascript
 meta:{needLogin:true}
 在某个路由下做一个标记
 
let router = new VueRouter({
        routes
    });

全局的方法 可以监控任意一个路径的更新
router.beforeEach((to,from,next)=>{ 
//next是一个函数 如果调用了next 会继续执行，没调用则卡在这个状态上
//to 是一个对象,有一个matched属性 他是一个数组,
//装着每一个匹配到的路由 /profile   /profile/info
//这里面一般做逻辑验证
})


```


