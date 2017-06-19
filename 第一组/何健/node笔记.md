## 全局对象
```javascript
全局对象,能在页面中直接使用的就是全局对象
如浏览器中的 console/setTimeout...

在node中可以直接使用的叫全局对象
在服务端 都挂在global上
1.this ,在文件中直接使用当前的this 不是global
2.自己声明的变量不会挂载在gloabl上,如果没有var 变量会声明在global上
如var a = 1  global.a-->undefined 
当是b = 1    global.b -->1

console.log(global) -->



process 进程 (是一个对象) 获取环境变量
1.区分本地开发环境 和线上开发环境
设置环境变量set NODE_ENV=xxx
只在当前框上设置的有效




Buffer 缓存区 内存

是暂时存放输入输出数据的一段内存


以下3个都是异步,同步执行完成异步会执行
setImmediate 与 setTimeout 哪个先执行不一定

nextTick>setImmediate>setTimeout



```
## Buffer
```javascript
是一个表示固定内存分配的全局对象，
也就是说要到缓存区中的字节数需要提前确定

Buffer好比由一个多位字节元素组成的数组
，可以有效的在javascript中表示二进制数据


```
## 定义BUffer的三种方式
```javascript
通过长度定义buffer
new Buffer(5)
通过数组定义buffer
new Buffer(ary)
通过字符串创建
new Buffer(str)
```

## Buffer常用的方法
```javascript
-fill方法
buffer.fill(0)
将buffer内容清0

-write方法
buffer.write("珠",0,3,'utf8')
buffer.write("峰",3,3,'utf8')
//珠峰

-toString方法
将buff转换成字符串类型

-slice方法

buffer.slice(0,4)
截取buff
和数组slice同理
从索引0开始截取,截取到索引4(不包括索引4)


-copy方法

复制buff把buffer拷贝到一个大buffer上
buff.copy(targetBuffer(目标buuer),targetstart(目标的开始),
sourcestart(源的开始),sourceend(源的结束))

源的开始和源的结束一般不写,默认是整个源的长度

let buf1 = new Buffer("珠峰")
let buf1 = new Buffer("培训")
let buffer = new Buffer(12);
buf1.copy(buffer,0)
buf2.copy(buffer,buf1.length)

buffer//-->珠峰培训


-concat方法 

Buffer.concat([buf1,buf2],length)
将buf1和buf2放在一个数组里面合并

-isBuffer
Buffer.isBuffer
判断是否是buffer

-length
获取字节长度
let buffer = new Buffer("珠");
console.log(buffer.length);//3

```
## 进制转换
```javascript
-将任意进制字符串转换为十进制
parseInt('11',2)//3
parseInt("e7", 16);//175 
第一个参数:值
第二个参数:当前值的进制


-将10进制转换为其它进制字符串
(3).toString(2))//10进制转二进制
(17).toString(16) //十进制转16进制
....
后面的为指定的进制

```
## fs
```JavaScript
fs模块:实现文件的读写操作
读取文件默认是buffer格式的编码
写入文件默认会toString
如果是异步方法,最后一个参数一定就是回调函数


-读取文件(读目录会报错)
fs.readFileSync(path,options) 同步读取文件(有返回值)
fs.readFile(path,options,callback) 异步读取文件(没有返回值)
异步是通过在回调函数里面获取读取的结果

-写入文件
fs.writeFileSync(path,data,opaions) 同步
fs.writeFile(path,data,opations,callback) 异步


拷贝文件(通过上述两种方式实现)

同步 
let fs = require('fs')
function copy(sources,target){
    let con = fs.readFileSync(sources)
    fs.writeFileSync(target,con)
}
copy('a.txt','b.txt')

异步
let fs = require('fs')
function copy(sources,target,callback){
    fs.readFile(sources,function(err,data){
        if(err){
            callback(err)
        }else {
            fs.writeFile(target,data,callback)
        }
    })
    
}
copy('a.txt','b.txt',function(err){
    console.log('写入成功')
})

```
## 目录操作
```javascript
let fs = require('fs');
fs.mkdir(path,mode,callback)异步创建
fs.mkdirSync(path,mode)同步创建
mode参数一般不写,系统自带默认值

不能一次创建两个文件夹
如:fs.mkdir('a/a/b') (a文件夹下面没有a文件夹)//报错

读取指定目录下面所有的文件,结果是个数组
fs.readdir('./a',function(err,data){
    console.log(data)
})

判断一个文件是否存在
fs.exists('./a',function(flag){
    flag//存在的是true,不存在是false
})


console.log(__dirname);//显示当前文件所在的文件夹
console.log(__filename);//显示当前文件的目录


-路径处理
let path = require('path')

join 将多个参数值字符串结合为一个路径字符串
path.join(__dirname,"a","b");
//D:\C\week2\day4\a\b

resolve取得绝对路径
path.resolve('a')//获得当前文件夹下a的绝对路径
返回值是一个字符串

basename获取当前文件的文件名
path.basename(__filename) //-->xxx.js
path.basename(__filename,'.js')//-->xxx

extname获取一个路径中的扩展名
path.extname(__filename) //->js

console.log(path.sep);//获取系统目录的分隔符
console.log(path.delimiter);//获取环境变量路径分隔符





```
## 流
```javascript

流的概念
流是一组有序的,有起点和终点的字节数据传输手段
不关心文件整体内容(不关心文件有多大),只关注是否从文件中
读取到了数据,以及读到数据之后的处理
流是一个抽象接口,被Node中的很多对象所实现,如一个HTTP服务器
的请求对象request是一个流,stdout也是一个流(console)

-readStream 文件可读流

fs.createReadStream(path,[opations]);

path:读取的文件路径
 
options : flags 对文件采取哪种操作,默认为'r'(读的意思);
          encoding 指定编码,默认为null;
          start用整数表示文件开始读取的字节数的索引位置;
          end用整数表示文件结束读取的字节数的索引位置(包过end位置);
          highWaterMark最高水位线,停止从底层资源读取前内部缓
          冲区最多能存放的字节数.缺省为64kb;
          


let fs = require('fs');

let rs = fs.createReadStream('./231.txt', {

})

-可读流的方法
//rs.setEncoding('utf8');可以在创建流之后指定编码
//pause 通知对象停止触发data事件
//resume通知对象恢复触发data事件
//pipe设置管道,将可读流里的内容导入到参数指定的可写流里



//当文件正在读取时触发data事件,并传递读取的每一块
rs.on('data',function(chunk){
    flags: 'r', //表示打开文件之后想干什么默认为 r
    encoding: null,//得到数据是buffer对象,如果指定编码,那么是字符串类型的
    start:2,//读取的字节符索引的开始位置(包括开始)
    end:3, // 读取的字节的索引的结束位置(包括结束)
    highWaterMark:1;//一次读多少个字节数发射出去(emit传递出去)(一个字节:一个buuffer长度)
    //默认值是64k
})


//当文件读取完成时,触发end事件
rs.on('end',function(){
    
})

//当文件读取出错是,触发error事件
rs.on('error',function(data){
    //data出错的信息
    console.log(data)
})

-读取文件的执行顺序
假如文件大小:640K
1.这个流会先从文件中读取64K,然后发射rs.emit('data')事件并传递读取到的64K
2.再从文件中读取64K,然后再发射rs.emit('data')事件
3.直到文件被读取完成,然后发射rs.emit('end')事件



-Writable可写流

fs.createWriteStream(path,[options])

path:读取的文件路径
 
options : flags 对文件采取哪种操作,默认为'w';
          encoding 指定编码,默认为null;
          start用整数表示文件开始的字节数的写入位置;
          highWaterMark最高水位线,write()方法开始返回false的缓冲大小.缺省为16kb(默认16k)


let ws = fs.createWriteStream(path,[options])

ws.write
write方法
write(chunk,[encoding],[callback]);
参数:chunl要写入的数据,Buffer或字符串对象,必须制定
     encoding 写入编码,chunk为字符串时有用,可选
     callback写入成功后回调
     返回值为布尔值,系统缓存区定满时为false,未满时为true

ws.end(chunk,[encoding],[callback]);
在写入文件是,当不再需要写入数据时可调取该方法关闭文件.
迫使系统缓存区的数据立即写入文件中


pipe
流,尤其是pipe()方法的初衷,是将数据的滞留量限制到一个可接受的水平,
以使得不同速度的来源和目标不会淹没可用内存

pipe是可读流上的一个方法

let fs = require('fs');

let rs = fs.createReadStream('1.txt');
let ws = fs.createWriteStream('2.txt');
rs.pipe(ws);

可读流pipe到可写流里面

```