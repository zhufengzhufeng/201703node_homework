####vue基础
  + 常用的几种数组
    + forEach 遍历数组和对象  回调函数里 不能用break,没有return 终止条件 最好不要用于更改数组和对象  this默认为window 可以传第二个参数改变this指向
    ```
     let arr=[{name:'zft'},{name:'zft'},{name:'zft'},{name:'afte'},{name:'zft'}];
   let userName='afte';
    arr.forEach(function (item,index){
        console.log(this);//this默认是window
    })
    ```
    + map ‘映射’  在遍历数组的过程中可以将数组以一种新的形式表达   我们多用map 做dom内的字符串拼接
    ```
    let arrList=[{name:'zp',age:23},{name:'zp',age:23},{name:'zp',age:23}];
  let olis=  arrList.map(function (item,index){
        return `<li>${item.name}${age}</li>`
    });
   console.log(olis.join(''));
    ```
    + find 用类对原始数据中某个字符串进行定位，以确定其位置（查找数组中的某一项）  返回最值为true时  得到的值是这一项，false或者没有返回值 得到的是undefined
    ```
    let arr=[{name:'zhufeng'},{name:'peixun'},{name:'xuexiao'},{name:'after'}],
    userName='zhufeng';
    let obj=arr.find(function(item,index){
    return userName==item.name;
    });
    console.log(obj);
    ```
    + some(callback,thisObject) 查找 返回值为boolean类型  callback回调函数里面可以传三个参数（ele,index,arr）当前元素、当前元素的索引、数组   多用于做判断
    ```
   let newArr=[5,6,8,9,11];
   let flag=newArr.some(function (item,index){
   return item>11;
   })
   ```
    + filter 过滤 如果函数中返回true 则将这一项放到新数组中  多用于删除某一项
  ```
   let arr2=[{name:'zp',age:23},{name:'jw',age:23}];
   let fil=  arr2.filter(function (item,index){
       return item.name!=='jw';
   });
  ```

    + reduce 迭代一个数组   里面的callback回调函数的参数是一个累加器  四个参数，（prev,next,index,arr）prev数组中的第一项 next 紧跟着第一参数的下一项  index 索引（从1开始1==0） arr原数组
    reduce 可以返回叠加后的结果
    
    ```
    let arr3=[{name:'zp',age:23},{name:'jw',age:23}];
   let arr4=[2,3,5,6,7,8,8,9];
    arr3.reduce(function (prev,next,index,arr){
        return prev+next;
    });
    ```
    + 新增的两个方法
    + 数组中的includes 简易的判断是否包含某一项
    + keys对象object中的方法  把对象转换为数组
  + mvvm  实现数据的双向绑定  视图里只有表单元素可以更改   vue就是基于这种模式的实现的
  + vue 的安装 
     +  1、先初始化（配置安装环境） 引入prackage.json文件          npm init -y  引入配置文件
     +  2、npm install vue --save    安装vue   开发项目yund
