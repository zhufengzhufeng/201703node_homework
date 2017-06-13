    ## 一. 新数组方法
- find
    - ES6语法
    - 查找
    - 返回找到的那一项
    - 仅是一个,不能找多个
    - 如果再这个函数中返回true,会将这一项返回如果没有true,则返回undefined
    - 找到后返回那一项,不会继续循环迭代
- includes
    - ES7语法
    - 查找,类似于indexOf>-1
    - 简易的判断是否包含这一项
- some
    - 查找
    - 返回boolean类型
- map
    - 映射,映射可以将一个数组变成另一种方式显示,返回新数组
    - 修改
    - 将数组转成字符串,join("")
- filter
    - 过滤
    - 如果函数中返回true,则将这一项放到新数组中
    - 如果给你某一项,让你删除掉,条件都是!==
- reduce
    - 可以返回叠加后的结果
    - 下一次会将当前这次的结果作为下一次的上一次
    - 参数
        - 第一个参数为函数,函数中有四个参数  
            - prev:上一个,只有第一个函数中的prev是数组的第一项,其余都是是上一次函数返回的结果
            - next:当前项
            - index:是next的索引
            - arr:原数组
        - 第二个参数,可以手动指定第一次的prev
- forEach
    - 不能用return终止循环
- for in
    - 可以遍历数组,将数组外的属性依然可以获取
    - 基本不用于遍历数组
- for of
    - 只会遍历数组中的内容
    - 可以使用break退出循环
    - 不能遍历对象
    - Object.keys(arrs),将对象转化成数组
    - Object.keys(obj).length==长度
        - 对象有几个属性
- 这些都是声明式
- 打开新项目
    1. 需要配置node环境 setting-node
    2. 配置es6语法 setting-language

## 二. 安装vue
- 安装前初始化package.json 主要用来描述自己的项目,记录安装过得文件有哪些,在当前文件夹下生产json
- 安装vue
    - --save(-S)代表项目依赖
    - --save-dev(-D)代表开发依赖
    ```
    npm info vue
    npm install vue --save
    npm install //跑环境,将package中的依赖全部安装
    ```
- 安装后默认会生产node_modules文件夹
    - 上传到git上node_modules是忽略掉的,拉下代码后,需要重新npm install安装依赖

## 三. Vue属性
- el
    - 指定的元素不能是html和body
    - 使用querySelector
- data
    - 可以使用vm来代理data属性,vm是Vue的实例
    - 在html中使用的属性必须先声明,不能新增不存在的属性,使用Object.defineProperty,vue不兼容IE8以及下包括IE8
- {{}}
    - 这是v-text的缩写,直接再标签上使用v-text可以避免出现大括号闪烁
    - 括号内可以使用三元表达式
    - 最终的结果需要有返回值,可以赋值,运算
    - 等待数据加载好后,将内容插入到div中
- v-model
    - 只能绑定定变量,先将对应的数据放到输入框的value值上
    - 会监听输入框的输入事件 oninput,将值放回到数据中
- v-once
    - 在标签中使用,变量在内容中调取
    - 被这个属性包住的属性,就不会再发生变化,只绑定一次
- v-html
    - 包住的内容会被解析成htlm结果
- method
    - 定义函数的一个对象,放所有函数
    - 函数中的this为vm,必须使用普通函数,箭头函数存在this指向问题
- v-on
    - 事件绑定函数传参会丢失event事件源,可以手动传递属性$event
    - v-on可以简写成@
    - 修饰符,可以连续嵌套
        - ".stop",可以阻止默认事件的冒泡
        - ".capture",捕获阶段
        - ".self",自己,只在自己身上触发
        - ".once",只触发一次
        - ".prevent",阻止默认行为
        - ".13",".enter",点击回车时触发
            - 可以使用键盘修饰符,支持keyCode和名称,只能用于@keyup和@keydown
- v-for
    - 写在要循环的子标签中
    - 数组中a in xxx,那么a的值是数组里的value
    - 对象中f in xxx,那么f的值是对象里的value
    - (value,key) in xxx,可以取到属性值,属性名
    ```
    <ul>
        <li v-for="(val,pIndex) in fruits">{{val.name}}
            <ul>
                <li v-for="(c,index) in val.color"> {{pIndex+1}}.{{index+1}} {{c}}</li>
            </ul>
        </li>
    </ul>
    ```
- v-if/v-else-if/v-else
    - 在标签中使用
    - 判断结果为true的时候才增加,false删除操作的是DOM,会影响性能
    ```
    <div v-if=""></div>
    <div v-else-if=""></div>
    <div v-else=""></div>
    ```
- v-show
    - 同样在标签中使用
    - 但不操作DOM,只操作样式,判断结果为true时,display:block,false时,display:none
    ```
    <div v-show=""></div>
    <div v-show=""></div>
    <div v-show=""></div>
    ```
    - 与v-if的使用情景需要判断
        - v-if有阻断作用,当外面的条件不满足是,内部代码不在执行
        - 频发显示隐藏,则选择v-show
- 如果想要将内容绑定在标签上,绑定的是动态属性,需要使用":",不能使用{{}}
    - style和class可以使用绑定对象,或者数组的方式
    - 其他的样式直接使用":"+样式名="属性名"
    - class和原生的不冲突,冒号会覆盖普通的class
    ```html
    <div :style="[s1,s2]"></div>//data中的属性名,支持字符串和对象属性
    <div :style="s1"></div>//data中的属性名,支持字符串和对象属性
    <div :class="['color','background']"></div>//类名
    <div :class="{'color':true,'background:true'}"></div>//类名
    ```

## 四. bootstrap
- success 绿色
- danger 红色
- warning 黄色
- primary 蓝色
- info 浅蓝色