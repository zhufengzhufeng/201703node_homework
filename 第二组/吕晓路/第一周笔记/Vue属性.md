## 一. Vue属性
- computed 
    - 计算属性
    - 直接在html中使用{{}}包起来的函数,每当页面中任意一个数据变化,都会被执行,使用computed来解决,而不放在methods中
    - 放在computed属性里的函数是一个属性,在页面调用时,以变量的形式调用,不加()
        - 因为写成函数的形式,默认调用了属性的get()方法,所以设置的是属性,而不是函数,输入的函数代码是放在属性里的get()方法中的
    - 如果有需要写{{函数}},必须放在computed中,而不用methods
- watch
    - 与computed类似
    - 可以夹杂异步逻辑
    - 当一个值变化时,执行某个动作用watch比computed方便
    - watch默认只监控一层,可以监控数组的变化,但数组中的对象的变化无法被监控
        - 给对应的属性增加一个属性deep:true,可以进行深层监控 
- directives
    - 指令
    - 在html中使用"-"连接单词,并且使用"v-"开头
    - 在js代码中使用驼峰命名法,不用加"v-"
    - 在JS中自定义属性传入两个参数
        - el:绑定这个自定义属性的元素
        - bindings:一个属性对象
            - value:代表的是指令对应的值v-xxx="值"
- created
    - 当vue创建时执行的方法

## 二. 属性

> 属性由两部分组成,set()和get()

- get()
    - 获取属性时,执行的函数
- set()
    - 设置修改属性时,执行的函数,可以印象其他值的改变,一般较少使用

## 三. 箭头函数

- 高阶函数,存在多重返回值,表现形式为存在多个箭头
- 注意点
    1. 如果参数只有一个,可以省略括号
    2. 如果有大括号必须写return,没有大括号就不需要return

## 四. 路由
- 通过路径的变化,显示不同的内容
- hash值
    - 通过window.hashchange二级事件来监控hash值的改变
    - 通过window.location.hash可以获取当前的hash值(#xxx),手动把#去掉
- 浏览器自带的history
    - 如果想要使用history.pushState是需要后台支持的(页面不存刷新会导致404),开发时使用hash的方式,上线可以改成pushState
    ```JavaScript
    window.history.go(-1);
    window.history.back(-1)
    window.history.pushState({},null,'/aaa');//路径可以存在也可以不存在
    ```

## 五. 本地存储
- localstorage
    - 可以将数据存储到浏览器中
    - h5的新特性,cookie
    - localStorage.setItem("key","value")
    - localStorage.getItem("key")

## 六. promise

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