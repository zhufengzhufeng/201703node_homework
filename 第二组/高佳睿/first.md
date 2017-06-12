##一.DOM相关：
+ 1.获取DOM元素
    + document.getElementById  
      - 通过id获取获取dom，id的上下文只能是document
      - 页面中有两个相同的id值，获取的是第一个
      - ie6.7中会把表单元素的name也当作ID获取(ie6.7中不区分大小写)
      > 注意：表单元素的name 值不要和id值重复，不要直接把小写换成大写
        
    + document.getElementsByName
      - 通过name获取元素
      - 在ie浏览器中只对表单元素起作用，上下文同id一样都是document
      - 通过input获取的表单元素，也是一组元素
      
    + document.getElementsByTagName
      - 通过标签名获取元素
      - 是一个集合、类数组，可以使用length长度、个数等属性
      - 如果需要获取具体的第几项，需要通过索引来获取
      
    + document.getElementsByClassName
      - 通过类名获取元素，但是在ie6.7.8下不兼容
      - 也是一个集合、类数组，可以使用长度、个数等
      - 如果需要获取第几项，也是同样需要加上索引来获取
    
    + document.documentElement
      - 获取的html元素 
      
    + document.body
      - 获取的是body元素
      
    + document.querySelector
      - 遵循css选择器的规则，但是也不兼容ie6.7.8
      - 多用于移动端
      
    + document.querySelectorAll
      - 获取的是一组元素
      - 同上，遵循css选择器的规则，不兼容ie6.7.8
      - 多用于移动端
    > 获取当前浏览器的可视窗口的高度和宽度
    var CW=document.documentElement.clientWidth ||document.body.clientWidth
    var CH=document.documentElement.clientHeight||document.body.clientHeight
    或者一定要有，不能省略，前后顺序不能颠倒
        
+ 2.DOM节点
  - 页面中所有的元素都叫节点，包括文本、标签、注释...
```
           
                nodetype        nodeName         nodeValue
    元素节点        1           大写的标签名          null
    文本节点        3           #text              文本内容
    注释节点        8           #comment           注释内容
    document       9           #document           null
```
+ 3.DOM节点属性

    + parentNode
      - 获取父亲节点
    
    + childNodes
      - 获取元素所有的子节点
      - 获取元素下指定的元素节点
    
    + children
      - 获取所有的元素子节点
      
    + firstChild  (firstElementChild)
      - 获取元素第一个节点(获取元素第一个文本节点)
      
    + lastChild   (lastElementChild)
      - 获取元素的最后一个节点(获取元素的最后一个文本节点)
      
    + previousSibling  (previousElementSibling)
      - 获取兄弟节点(获取上一个兄弟文本节点)
    
    + nextSibling (nextElementSibling)
      - 获取弟弟节点(获取弟弟文本节点)


+ 4.DOM操作

   + document方法：
     + createElement(name) 创建指定类型的新节点
   
   + node方法：
     + appendChild(动态创建的DOM对象)  给指定元素添加一个新的子节点
     + insertBefore(新节点，旧节点)  在节点前边添加新的节点
     + replaceChild(新节点，旧节点)  替换指定节点的子节点
     + removeChild()  移除指定节点的子节点
     + cloneNode(true/false) 克隆节点，true代表深度克隆/false代表克隆本身
     
   + element方法：  
     + getAttribute('属性名')  获取属性名
     + setAttribute('属性名',属性值)  设置属性值，手动添加给行内
     + removeAttribute('属性名')  移除对应的属性名和属性值
    >html编写时都以小写进行编译
        

##二.数组常用方法

   + toString()
     - 把toString转换的字符串返回，原有数组不变
   + valueOf()
    
   + join()
     - 以指定的分隔符替换数组中的',',分隔符转换为字符串，不添加默认是','
     - 参数必须是字符串格式的
   + concat()
     - 合并多个数组、合并字符串
     - 返回合并后的新数组，原有数组不改变
   + indexOf()
     - 寻找数组中是否包含某一项，没有的话返回-1，有的话就返回找到的那一项的第一次出现的索引
   + lastIndexOf()
     - 同上边相反，从末尾开始查，有的话返回第一次第一次出现的索引
   + sort()
     - 根据UNICODE编码进行排序
     - 数字排序用+/-，非数字排序用localCompare，这里的a、b是数组中的前一项和后一项
     - 排10以内的数，多位的需要再套一层函数
   + reverse()
     - 颠倒数组，没有排序功能
   + slice(n,m)
     - 查找、截取数组，原有数组不变
     - m必须大于n，从n项开始到找到m项之前，把查找到的内容以新数组的形式返回
   + splice()
     - 数组的增、删、改
     - splice(a,0,增加的内容) 增加
        + 增加是在a索引之前增加，返回空数组，原有数组改变
     - splice(a,m,n)  修改
        + 从索引a开始，删除m个，删除的用n替换，n可以是一项也可以是多项，多项的话用','隔开
     - splice(a,n)  删除
        + 从索引a开始，删除n个，返回删除项组成的数组，原数组改变，
   + pop()
     - 删除末尾项，()中不需要传参
     - 返回是删除掉的那一项，对原数组进行了修改
   + push()
     - 向数组末尾增加，可以传一个或者多个，多个的话用','隔开
     - 函数执行完后返回的是新数组的length，原数组发生了改变
   + shift()
     - 删除开头项，()中不需要传参
     - 返回删除的那一项，原有数组改变
   + unshift()
     - 向开头增加，一道多个任意js数据类型的值
     - 返回改变后的数组的长度，原有数组改变
   + forEach()
     - 遍历每一项，里边常传的是函数，函数形参是item和index
   + map()
     - 同forEach一样，但是比其多了一个把原内容替换
   + filter()
     - 过滤
   + every()
   + some()
     - 查看是否有满足条件的元素
   + find 
     - 查找数组中的某一项，返回是将当前遍历的元素返回
     - 找到之后就不再继续查找
   + reduce()
   + reduceRight()
   
   
   
##三、字符串常用方法

   + toString()
     - 转换成为字符串
   + valueOf()
   + charAt(index)
     - 获取指定索引位置的字符
   + charCodeAt()
     - 返回指定位置的unicode编码，返回的是0~65535之间的整数
   + indexOf('value')
     - 返回该值第一次出现的索引，没有则返回-1
   + lastIndexOf()
     - 返回该值最后一次出现的位置
   + concat()
     - 拼接
   + substr(n,a)
     - 从索引n开始，删除a个，返回值截取的内容，传0相当于复制字符串
   + substring(n,m)
     - 从索引n开始截取到索引m处，不包含m
   + slice(n,m)
     - 从索引n开始，截取到索引m处，不包含m(支持参数负值，即从最后一项开始截取m项)
   + toLowerCase() toLocaleLowerCase()
     - 转换为小写
   + toUpperCase() toLocaleUpperCase()
     - 转换为大写
   + trim()
   + split()
     - 分割
   + replace()
     - 替换字符
   + search('value')
     - 返回-1，说明该值不存在在字符串中
   + match(/^$/)
     - 返回一个数组，数组中是匹配到的字符
   + localeCompare()
   + fromCharCode()`

##四、Math方法
   + Math.abs()  取绝对值
   + Math.ceil()  向上取整
   + Math.floor()  向下取整
   + Math.round()  四舍五入
   + Math.random()  获取随机数,[0~1)之间
   + Math.max()  获取最大值
   + Math.min()  获取最小值
   + Math.pow(a,b)  求a的b次方的值      Math.pow(10,3) ->1000
   + Math.sqrt()  开跟方的值   Math.sqrt(100) ->10
   + Math.PI  π
   >获取n~m之间的随机数
    var num=Math.round(Math.random()*(m-n)+n);  [n.m]
    var num=Math.floor(Math.random()*(m-n+1)+n)  [n,m] 
   
