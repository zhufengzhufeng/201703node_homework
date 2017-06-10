## node下载
https://nodejs.org/en/

## 下载node源码
https://nodejs.org/en/download/


## 配置环境变量 
- 计算机=> 属性 => 高级系统设置 => 环境变量 => path新增即可


## 全局对象
如：console、settimeout
在node能使用的都叫全局对象
- 在服务端，都挂在global上
1. this 在文件中直接使用当前的this不是global
```
console.log(this)//
~function(){
console.log(this)// this是global
}()
```
2. 自己声明的变量捕获挂载在global上的,如果没有var变量会声明在global上
  ```
  var a=0;
  console.log(a)// 0
  var  a=0;
  console.log(glob.a)// undefined
  ```
```  
 process 进程
 Buffer 缓存区 内存
 clearImmediate: [Function], 清除立即
 clearInterval: [Function],
 clearTimeout: [Function],
 setImmediate: [Function],
 setInterval: [Function],
 setTimeout: [Function],
 console: [Getter]
```
1. console log/ dir warn（警告） info error timer timerEnd计算时间差
  ```
  console.timer('frist');
  for(let i=0;i<1000;i++){
  }
  console.timer('frist');//console的试计算的时间差
  ```
2. settimerout(异步) 相当于服务员的第二个小本
```
  settimerout(function(){
  console.log(this)// this是timeout
  })

  function fn(who,food){
      console.log('eat'+who food)
   }
   settimerout(fn,1000,'人'，'橘子')
  //可以传递参数，从第二个参数开始；
```
=》 事件环： 当前事件环，下一个事件环，
 node是基于事件驱动的

 ```
setImmediate(function () {
    console.log('setImmediate');
});//setImmediate立即 是异步方法

setTimeout(function () {
    console.log('timeout');
});
//setImmediate,setTimeout顺序是不确定的 setImmediate相当于第二个小本上
```

3. process 获取环境变量
 ```
//1. 区分本地开发环境 和线上开发环境
//设置环境变量 set NODE_ENV=developement 设置环境变量
console.log(process.env);
let url =''
if(process.env.NODE_ENV === "hello"){
    url =  'http://localhost:8080';
    console.log('开发环境 ');
}else{
    url = 'http://www.baidu.com';
    console.log('线上环境');
}
```

