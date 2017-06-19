let http = require('http');
let fs = require('fs');
let mime = require('mime');
let url = require('url');
let users = [
        {username:'zfpx',password:'zfpx',id:1},
        {username:'hello',password:'world',id:2}
    ];
http.createServer(function(req,res){
    //需要获取 请求的路径 pathname是路径 query是参数  true是转化成对象形式
    let {pathname,query} = url.parse(req.url,true);
    //当直接访问http://localhost:8080时返回的是文件的首页
    if(pathname==='/'){
        res.setHeader('Content-Type','text/html;charset=utf-8');//如果前端没有写charset=utf8那么后端一定要写这段代码
        fs.createReadStream('index.html').pipe(res);//读取index的可读流放入响应这个res的可写流
    }else if(pathname ==='/user'){
        let method = req.method;//根据方法的不同做不同的处理
        //let id = query.id;//localhost:3000?id=1
        res.setHeader('Content-Type','application/json;charset=utf-8');
        if(method ==='GET'){
            res.end(JSON.stringify(users));//根据method返回给ajax返回数据
        }else if(method ==='POST'){

            //req是一个可读流对象, on('data') on('end')
            //将body中的数据添加到数组里，增加一个id
            //返回最新的数据 前端获取数据，调用bindhtml实现增加功能
            let body = '';
            req.on('data',function(data){//这里读取数据的时候是个buffer,用toString()可以把buffer转化为字符串
                //上来先读一下内容，如果没有数据
                body+= data;
            });
            req.on('end',function(){//如果没有数据会直接调用end,如果传递了数据转换成对象，没传递就是空对象
                    let obj = {};
                    body.replace(/([^=&]+)=([^=&]+)/g,function(){
                        obj[arguments[1]] = arguments[2];
                    /*  以444和33为例  { '0': 'username=444',
                            '1': 'username',
                            '2': '444',
                            '3': 0,
                            '4': 'username=444&password=33'
                        }*/
                    })
                    body  = obj;
                    //修改的时候进入这里
                    if(body.id){
                        for(u in users){
                            if(users[u].id==body.id){
                                users[u].username = body.username.toString();
                                users[u].password = body.password.toString();
                            }
                        }
                        res.end(JSON.stringify(users));
                        return
                    }
                    //添加的时候进入这里
                    body.id = users.length>0? users[users.length-1].id+1:1;
                    users.push(body);
                    res.end(JSON.stringify(users));
                    //逻辑要在获取请求体中 操作数据
            })
        }else if(method ==='PUT'){
            let del = '';
            req.on('data',function(data){//这里读取数据的时候是个buffer,用toString()可以把buffer转化为字符串
                //上来先读一下内容，如果没有数据
                del+= data;
            });
            req.on('end',function(){
                let obj = {};
                del.replace(/([^=&]+)=([^=&]+)/g,function(){
                    obj[arguments[1]] = arguments[2];
                })
                del=obj;
                let d = '';
                for(let u in users){
                    if(users[u]['id'] ==del['id']){
                        d = users[u];
                    }
                }
                res.end(JSON.stringify(d));
            })
        }else if(method ==='DELETE'){
            let del = '';
            req.on('data',function(data){
                del+=data;
            })
            req.on('end',function(){
                let obj = {};
                del.replace(/([^=&]+)=([^=&]+)/g,function(){
                    obj[arguments[1]] = arguments[2];
                })
                del=obj;
                for(let u in users){
                    if(users[u]['id'] ==del['id']){
                        users.splice(u,1);
                    }
                }
                res.end(JSON.stringify(users));
            })
        }
    }else{
        fs.exists('.'+pathname,function(flag){//这个点得加上要不就是从C盘上去找了
            if(flag){
                res.setHeader('Content-Type',mime.lookup(pathname)+';charset=utf-8');//如果前端没有写charset=utf8那么后端一定要写这段代码
                fs.createReadStream(pathname.slice(1)).pipe(res);
            }else{
                res.statusCode = 404;//告诉浏览器此文件不存在 浏览器自动会报错
                res.end();
            }
        })
    }
}).listen(8080);


