####  vue中对于数组的一些方法
1、find  查找
返回值：返回查找到的那一项，仅仅是一个
如果在find()函数中返回true，会将找到的这一项返回，如果没有true则返回undefined
```
let arr = [{name: 'zfpx'}, {name: 'hello'}, {name: 'zfpx'}, {name: 'zfpx'}];
let username = 'zfpx';
let obj = arr.find(function (item, index) {
    return username === item.name;//需要return返回
});
console.log(obj);//Object {name: "zfpx"}
```
2、some 查找判断
返回值：true/false
简易的判断是否包含某一项
```
let newArr = [5, 6, 11];
let flag = newArr.some(function (item, index) {
    return item > 11;
});
console.log(flag);//false
```
3、map映射 可以将一个数组变成另一种方式显示，返新数组：可以做修改
```
let arrList = [{name: 'zfpx', age: 8}, {name: 'fc', age: 18}];
let list = arrList.map(function (item, index) {//里面可以传递一个方法，用来修改数组
    return `<li>${item.name}${item.age}</li>`
});
console.log(list.join(''));//<li>zfpx8</li><li>fc18</li>
```
4、filter 过滤
返回值：如果函数中返回true则将这一或多项放到新数组中返回
```
let filterArr = [{name: 'zfpx', age: 8}, {name: 'fc', age: 18},{name: 'zfpx', age: 8}].filter(function (item, index) {
       return item.name === 'zfpx';//如果给你某一项，让你删除掉，条件都是！==
   });
   console.log(filterArr);//[Object, Object]

```
5、reduce 可以返回叠加后的结果
返回值：叠加后的结果
```
直接用来数组的叠加结果：
let sum = [1, 2, 3, 4, 5].reduce(function (prev, next, index, arr) {
    console.log(prev, next, index, arr);//下一次会将当前这次的结果作为下一次的上一次
    return prev + next;
});
console.log(sum);//15

```

```
可以用来计算对象中各值叠加的结果：
let res = [{price: 10}, {price: 20}, {price: 30}].reduce(function (prev, next, index, arr) {
    console.log(prev, next, index, arr);
    return prev + next.price;
},0);//注意：第二个参数 可以手动指定第一次的prev;
console.log(res);//60
```
6、forEach(确定不能return)，for in(可以遍历数组，数组外的属性依然可以获取)，for of(只会遍历数组中的内容，可以break，不能遍历对象)
```
let arrs = [1,2,3,5];//将对象转化为数组Object.keys(arrs)
arrs.a = 100;
for (let val of arrs){
    console.log(val);//1
    break;
}
```







