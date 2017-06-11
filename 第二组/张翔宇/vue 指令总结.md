##  vue 指令总结

- {{}}： 表达式，通过这种方式把data里面的数据显示在页面中；
- v-text     ：
 - 可以放三元表达式，可以赋值；
 - 解决闪烁问题；
 - 最终结果要有返回值；
- v-html ：
 - 绑定html元素     
```
<html>
<body>
<div id="app">
    <p>{{message}}</p>
    <p v-html="html"></p>
    <p v-text="text"></p>

</div>
</body>
<script>
    let app = new Vue({
        el: "#app",
        data: {
            message: "hello,word,<b>{{}}</b>通过双括号绑定!",
            html: "通过<b>v-html</b>方式绑定,html标签在渲染的时候被解析了。",
            text: "通过<b>v-text</b>方式绑定,html标签在渲染的时候被源码输出了。",
        }
    });
</script>
</html>

```

- v-model ：
 - 结合input使用；input可以展现数据，可以修改数据；
     - autocomplate = 'off'   清除缓存     
 - 只能绑定变量，先将对应的数据放入到输入框的value值上
```
body>
<div class="app">
    <p>{{message}}</p>

    <input type="text" v-model="message">
</div>
</body>
<script src="vue.js"></script>
<script>
    var vm = new Vue({
        el:'.app',
        data:{
            message:'hello word'
        }
    })
</script>
```
- v-once：
- 被v-once包住的属性就不贵发生变化了； 
- v-on:click -> @click
 - 点击事件，可以简写成@click
 - 调用函数执行要加（） 例：a();
 - 函数执行时 带括号 一般是传递参数，会丢失event源，可以手动传递属性$event
```
<body>
<div class="app">
    <div @click="fn">{{message}}</div>
</div>
</body>
<script src="../C模块/vue1/boostrap-vue/vue_/vue.js"></script>
<script>
    var vm = new Vue({
        el:'.app',
        data:{
            message:'点击'
        },
        methods:{
            fn(){
                alert("点击事件")
            }
        }
    })
</script>
```
- v-for
 - 循环，想循环谁就放在谁身上；
 - 数组中a in xxx ,那么a 的值是 数组里的value
 - 对象中f in xxx ,那么f 的值是 对象里的value
 - （value,index）in xxx,   也可以循环（index）索引
 
```
<div id="app">  
       <ul>  
           <li v-for="item in list">{{item.n}}</li>  
       </ul>  
   </div>  
   </body>  
   <script>  
       var app=new Vue({  
           el:'#app',  
           data:{  
               list:[{n:1},{n:2},{n:3},{n:4},{n:5},{n:6}]  
           }  
       })  
   </script>  

```
- v-if：
 - 根据表达式的真假条件来渲染元素，相对v-show来说比较 消耗性能；
 - 使用场景：外部条件不满足的时候，就不需要内部代码再执行了； 
 - 延伸：用template标签，不会渲染到页面上；在v-show上面不支持； 
 
```
 <div id="app2">
    <p>{{ message }}</p>
    <input v-model="message"></input>
    <mycomponent></mycomponent>
    <p v-if="message==='10086'">message===10086</p>
    <p v-else-if="message==='10087'">message===10087</p>
    <p v-else>message===10088</p>
  </div>
</template>

<script>
  import mycomponent from './component/mycomponent.vue'
  export default {
    name: 'app2',
    data() {
      return {
        message: 'Hello Vue.js!'
      }
    },
    components: {
      mycomponent
    }
  }
</script>
```
- v-show：
 - 根据表达式的真假，切换元素的display值，dom结构是一直存在于页面中的；相对v-if来说，安全性较低； 
 - 使用场景：有元素频繁的显示和隐藏；
 
```
<body>
    <div id="box">
        <input type="button" value="toggle" v-on:click="toggle> <br />
        <div v-show="isShow" style="width: 100px;height: 100px;background: red"></div>
    </div>
</body>
 <script type="text/javascript">
        window.onload = function(){
            var vm = new Vue({
                el:'#box',
                data:{
                    isShow:false,
                },
                methods:{
                    toggle(){
                        this.isShow = !this.isShow;
                    }
                }
            });
        }
    </script>
</head>
```
