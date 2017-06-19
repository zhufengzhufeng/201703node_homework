######安装vue npm,bower,yarn...
-安装前初始化package.json,主要用来描述自己的项目，记录安装过的文件有哪些,在当前文件下生成json,名字不能叫要安装的文件(命令:npm init -y)
-安装vue:npm install vue -S安装vue
--save代表项目依赖（比较常用）可以简写成 -S 
--save-dev 开发者依赖 可以简写成-D；
- 安装后默认会生成node_modules文件夹
 上传到git上node_modules是忽略掉的，拉下代码后 需要重新npm install 安装依赖
 npm info vue查看版本号
 
#####安装vue
安装vue npm bower  yarn...
1)安装前初始化package.json   npm init -y
2)查看版本号  npm info vue
npm install vue --save安装vue(--save代表项目依赖（-S），--save-dev开发依赖（-D）)
简写：npm install vue -S
安装后默认生成node_modules文件夹-上传到git-node_module时忽略掉的，拉下代码后，需要重新安装 npm install 安装依赖（名字不能叫安装的文件）

###vue.j是一套构建用户界面，渐进式框架。易用、灵活、性能

#######MVC:M model数据或者模板---数据库 V view视图 C control 后台业务语言写的node ph java
-  model  数据
-  view   视图
-   controller 控制器
 M:处理数据，专门写处理数据的js；V：专门DOM操；C:专门数据交互；
 
 ######MVVM：M model(数据)  V view（视图） VM viewmodel（视图模型）视图和数据的连接器，中转和沟通媒介模板；（数据的双向绑定）
 V:view前端视图  VM   M数据
  mv*....
  - model
  - view 
  - viewModel
  
  #####vue和angular对比：
-  vue--简单、易学，指令以v-xxx属性方法挂在Vue实例上，适用于移动端项目；
-angular--学习曲线陡峭，指令以ng-xxx属性方法均在scope上，适用于pc端项目
以上两种框架都不支持IE8以下版本（包括IE8）
> vue使用：
一段落json + 一块html即可；-->引用vue-->用之前先声明在使用，不能新增不存在的属性
el:指定元素不能是html,或者body,querySelector;
```javascript
let vm=new Vue({
  el:'#app',
    data:{},
    methods:{}
})
```
######vue表达式：可以放三元表达式、赋值、最终结果需要有返回值。不支持逻程（if else）;

######vue命令
- v- 代表的是指令
- v-text {{}}
- v-html
- v-model 
- v-once
 - v-for
- v-if/v-show
- v-bind

详细的讲解：
- v-model 1)只能绑定变量 先将对应数据放在输入框的value值上；2）监听输入框的输入事件；
- v-on 事件监听 可以简写@
- v-text 可以避免括号导致的闪烁问题
```
<span v-text="msg"></span>
<!-- 和下面的一样 -->
<span>{{msg}}</span>
```
- v-html 绑定HTML数据 内容按普通 HTML 插入 - 不会作为 Vue 模板进行编译 。如果试图使用 v-html 组合模板,可以重新考虑是否通过使用组件来替代。 
 在网站上动态渲染任意 HTML 是非常危险的，因为容易导致 XSS 攻击。只在可信内容上使用 v-html，永不用在用户提交的内容上。
 ```
 <div v-html="html"></div>
 ```
 v-once 绑定一次（渲染一次） 比较特别：
```
<div v-once>{{msg}}</div>
```
- v-show 不满足条件操作的是样式，频繁显示隐藏（用的比较多）；
- v-if 有阻断的作用，当外面条件不满足时，内部代码不执行。
- v-for   基于源数据多次渲染元素或模板块。循环谁，就放在谁身上；
```
<div v-for="item in items">
  {{ item.text }}
</div>
<div v-for="(item, index) in items"></div>
<div v-for="(val, key) in object"></div>
<div v-for="(val, key, index) in object"></div>
```
- v-bind 
  + 动态地绑定一个或多个特性，或一个组件 prop 到表达式。
  + 在绑定 class 或 style 特性时，支持其它类型的值，如数组或对象。可以通过下面的教程链接查看详情。
   + 在绑定 prop 时，prop 必须在子组件中声明。可以用修饰符指定不同的绑定类型。
  + 没有参数时，可以绑定到一个包含键值对的对象。注意此时 class 和 style 绑定不支持数组和对象。
         
```
<!-- 绑定一个属性 -->
   <img v-bind:src="imageSrc">
   <!-- 缩写 -->
   <img :src="imageSrc">
   <!-- with inline string concatenation -->
   <img :src="'/path/to/images/' + fileName">
   <!-- class 绑定 -->
   <div :class="{ red: isRed }"></div>
   <div :class="[classA, classB]"></div>
   <div :class="[classA, { classB: isB, classC: isC }]">
   <!-- style 绑定 -->
   <div :style="{ fontSize: size + 'px' }"></div>
   <div :style="[styleObjectA, styleObjectB]"></div>
   <!-- 绑定一个有属性的对象 -->
   <div v-bind="{ id: someProp, 'other-attr': otherProp }"></div>
   <!-- 通过 prop 修饰符绑定 DOM 属性 -->
   <div v-bind:text-content.prop="text"></div>
   <!-- prop 绑定. “prop” 必须在 my-component 中声明。 -->
   <my-component :prop="someThing"></my-component>
   <!-- XLink -->
   <svg><a :xlink:special="foo"></a></svg>
```

#### vue修饰符
- .stop 阻止冒泡行为
- .prevent  只触发一次 阻止默认行为
- .self 在自己身上触发
- .once 只触发一次
- .capture - 添加事件侦听器时使用 capture 模式。
- .self - 只当事件是从侦听器绑定的元素本身触发时才触发回调。
- .{keyCode | keyAlias} - 只当事件是从特定键触发时才触发回调。
- .native - 监听组件根元素的原生事件。
- .once - 只触发一次回调。
- .left - (2.2.0) 只当点击鼠标左键时触发。
- .right - (2.2.0) 只当点击鼠标右键时触发。
- .middle - (2.2.0) 只当点击鼠标中键时触发。
- .passive - (2.3.0) 以 { passive: true } 模式添加侦听器
动态绑定：v-bind:属性='变量'->:属性='变量'
动态属性：如果想将内容绑定在标签上，需要使用:  不能使用{{}}
style和class比较特殊 绑定对象方式和数组方式
:class="['color','background']"
:class="{'color':true,'background':true}"
冒号绑定的class和原生的class名不冲突，冒号的class会覆盖原生的class名，如果没有冲突，会合并。

```
let vm = new Vue({
    el:'#app',
    data:{ //写内容
        hash:'complete',//路径切换时 获取的hash值
    },
    created(){ //当vue创建时执行的方法
    }
    },
    methods:{
 //写函数
    },
    computed:{
       // computed代表属性；里面试计算属性
     
                   sum:{//sum虽然写成函数类型，依然是属性；
                      get(){return this.price*this.count;//根据price和count计算来的},
                      set(val){在set中会影响其他值的改变}
                 } 
               }
       一般不写set方法，用get方法可以简写成sum(){}
         sum(){//sum虽然写成函数类型，依然是属性；
                       return this.price*this.count;//根据price和count计算来的
                  }
    }
    watch:{
   // 观察 Vue 实例变化的一个表达式或计算属性函数。回调函数得到的参数为新值和旧值。表达式只接受监督的键路径。对于更复杂的表达式，用一个函数取代。}
});
```



  
 