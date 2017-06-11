
打开新项目需要先配置：
1. 需要配置node环境 setting -> node
2. 配置es6语法 setting-> language
## vue中常用的数组方法
1. find 查找 返回找到的那一项 仅是一个
```
let arr = [{name:'zfpx'},{name:'hello'},{name:'word'},{name:'zfpx'}];
let username = 'zfpx1';
let obj = arr.find(function (item,index) {
    //如果在这个函数中返回true 会将这一项返回如果没有true 则返回undefined
    return username===item.name; //找到后则返回
}); //改变this指向
console.log(obj);
```
2. forEach this指向window。回调函数的this指向是window;
         在第二个参数写数组，即可将this改为数组，
          没有return，
```
let arry=[{name:'hello'},{name:'zfpx'},{name:'zfpx'},{name:'hello'}];
let username='zfpx';
arry.forEach(function (item,index) {
    console.log(this);

},arr);
```
3. some返回的是boolean类型
```
[5,6,11].includes(11);// 简易的判断是否包含这一项
let newArr = [5,6,11];
let flag = newArr.some(function (item,index) {
    return item>11;
});
console.log(flag); //声明式 => vue 声明式
```
4. map 映射 映射可以将一个数组变成另一种方式显示 ,返回新数组
```
let arrLis = [{name:'zfpx',age:8},{name:'jw',age:18}];
let oLis =arrLis.map(function (item,index) { //修改和映射的功能
    return  `<li>${item.name}${item.age}</li>`;
});
console.log(oLis.join(''));
```
5. filter 过滤 如果函数中返回true 则将这一项放到新数组中
```
let filterArr = [{name:'zfpx',age:8},{name:'jw',age:18}].filter(function (item,index) {
    return item.name !== 'jw';//如果给你某一项 让你删除掉，条件都是!==
});
console.log(filterArr);
```
6. reduce 可以返回叠加后的结果
```
let result = [1,2,3,4,5].reduce(function (prev,next,index,arr) {
    console.log(prev,next,index,arr);//下一次会将当前这次的结果作为下一次的上一次
    return prev + next;
});
console.log(result);
let res = [{price:10},{price:20},{price:30}].reduce(function (prev,next,index,arr) {
    return prev + next.price;
},0);//第二个参数 可以手动指定第一次的prev;
console.log(res);
```
 练习题：
```
let res1=[{price:12},{price:13},{price:15},].reduce(function (prev,next,index,arr) {
    return prev+next.price;
},0);//第二个参数可以手动指定第一个prev
console.log(res1);//40
```
7.  for in(可以遍历数组,数组外的属性依然可以获取) for of (只会遍历数组中的内容，可以break；不能遍历对象)
```
let arrs = {name:1,age:2}; //将对象转化成数组 Object.keys(arrs);
//arrs.a = 100;
for(let val of Object.keys(arrs)){
    console.log(arrs[val]);
}

```

练习题：Object.keys有几个属性
```
let school=[{name:1,age:2,add:3}];
if(Object.keys(school).length===3 ){

}
//[[1,2,3],[4,5],[6,7]]//[1,2,3,4,5,6,7]
let re=[[1,2,3],[4,5],[6,7]].reduce((prev,next)=>prev.concat(next));
console.log(re);//[ 1, 2, 3, 4, 5, 6, 7 ]
```