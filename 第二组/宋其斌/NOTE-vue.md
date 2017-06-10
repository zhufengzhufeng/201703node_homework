### 常用事件修饰符
- stop      阻止冒泡
- prevent   阻止默认行为
- capture   发生在捕获阶段
- self      只有点击自己才能触发 子元素无法触发
- once      只触发一次


- 键盘事件(@keyup/@keydown)修饰符
    - enter/13  对应的是enter键
    - keyCode对应的数字
    
### v-bind  绑定动态属性
- 如果想要给标签的行内属性绑定内容,需要使用v-bind简写成':' 
- style class 比较特殊 可以绑定对象或者数组的方式
- 冒号绑定的class和原始的不冲突,如果class冲突 :绑定的会覆盖原始的class

## vue基础命令
- v-text
- v-module
- v-for
- v-if
- v-show
- v-on/@
- v-bind/:

## 修饰符
- @click
    - stop
    - capture
    - keyCode
    - once
    - prevent
    - self

## 动态绑定
v-bind:属性="变量" => :属性="变量"
- :class/:style 绑定对象或者数组


### 计算属性 computed
```javascript
    //只是获取值:简单写法默认执行的是get方法
    computed:{
        sum(){
            //计算逻辑
            return value;
        }
    }
    //获取和设置值:完整写法
    computed:{
        get(){
            //计算逻辑
            return value;
        },
        set(value){
            //相应的操作,可能会对其他值造成影响
        }
    }
    
```

### checkbox 的选中状态根据v-model的值来确定,true为选中false是未选中

### 箭头函数
```javascript
//如果只有一个参数可以省略括号
//如果有大括号必须写return,没有{}就不需要写return
    let fn = () => {};
    let fn1 = a => a;
    let fn2 = (a, b) => a + b;

    let fn3 = (a, b) => c => a + b + c;//高阶函数
    console.log(fn3(1, 2)(3));

    let fn4 = a => b => c => d => a + b + c + d;
    console.log(fn4(1)(2)(3)(4));


    let obj = {
        a(){
            setTimeout(function () {//这样写this是window
                console.log(this);
            }, 100);
        },
        b(){
            setTimeout(()=>{//箭头函数中的this是obj
                console.log(this);
            }, 100);
        }
    };

    obj.a();
    obj.b();
```
### watch 监听
```javascript
    //简写形式:
    watch:{
        data(){//data是我们要监听的数据,数据发生变化就执行下面的内容,支持异步编程,而computed不支持
            //处理程序
        }
    }

    //完整写法,标准写法
    watch:{
        data:{//data是我们要监听的数据
            handler(){
                //处理程序
            },
            deep:true  //进行深度监听,因为默认只能监听一层
        }
    }

```

### input标签无法默认获取焦点
    autofocus属性
    
    在vue中注册指令
```javascript
    directives: {//自定义指令(注册指令)
        //autoFocus 相当于html元素中的autofocus属性,对应的指令就是v-auto-focus
            autoFocus(el, bindings){//el是使用指令的元素,bindings中有一个value属性代表的是指令对应的值
                if (bindings.value) {//value是true才执行
                    el.focus();
                }
            }
        }
```

### 监听hash值的变化
    window.location.hash就是url中的hash值,window的onhashchange事件用来监听hash是否发生变化
```javascript
    let listener = () => {
        vm.hash = window.location.hash.slice(1) || 'all';//如果没有得到hash默认是all
    };
    listener();//页面一加载就获取hash,否则可能或跳转到默认hash
    window.addEventListener('hashchange', listener, false);
```

### 本地存储 localStorage
    存储的时候  都是以字符串的形式传递的JSON.stringify,取出来的时候默认是字符串,可能需要转换成对象JSON.parse
    连续存储key值相同的记录后面的会覆盖前面的
    
```javascript
    localStorage.setItem('key',JSON.stringify(obj));
    let newObj = localStorage.getItem('key');//取出来的是字符串,如有需要根据需求转换格式
```
### promise
```javascript
    let fs = require('fs');
    let pro = new Promise((resolve,reject)=>{
        fs.readFile('./test.txt','utf-8',(err,data)=>{
            if(err){
                reject(err);
                return;
            }
            resolve(data);
        })
    });
    pro.then((data)=>{
        console.log(data);
    },(err)=>{
        console.log(err);
    })
```















