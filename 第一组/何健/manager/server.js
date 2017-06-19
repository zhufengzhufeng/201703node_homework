let http = require('http'),
    fs = require('fs'),
    mime = require('mime'),
    url = require('url'),
    users = [
        {username: 'zfpx', password: 'zfpx', id: 1},
        {username: 'hello', password: 'world', id: 2},
    ];
http.createServer(function (req, res) {

    let {pathname, query} = url.parse(req.url, true);

    if (pathname === '/') { //这里处理默认输入
        res.setHeader('content-type', 'text/html;charset=utf-8');
        fs.createReadStream('index.html').pipe(res)
    }

    else if (pathname === '/user') { //这里处理动态数据
        let method = req.method;
        let id = query.id;
        res.setHeader('content-type', 'application/json;charset=utf-8');

        if (method === 'GET') {
            res.end(JSON.stringify(users));
        } else if (method === 'POST') {
            let body = '';
            req.on('data', function (data) {
                body += data
            });
            req.on('end', function () {
                body = explain(body);
                body.id = users.length > 0 ? users[users.length - 1].id + 1 : 1;
                users.push(body);
                res.end(JSON.stringify(users))
            });
        } else if (method === 'PUT') {
            let body = '';
            req.on('data', function (chunk) {
                body += chunk
            });
            req.on('end', function () {
                body = explain(body);
                users.forEach((item, index) => {
                    if (item.id == body.id) {
                        item.username = body.username;
                        item.password = body.password;
                    }
                });

                res.end(JSON.stringify(users))
            })
        } else if (method === 'DELETE') {
            users.forEach((item, index) => {
                if (item.id == id) {
                    users.splice(index, 1);
                }
            });
            res.end(JSON.stringify(users));
        }
    }

    else { //这里处理静态文件内容
        fs.exists('.' + pathname, function (flag) {
            if (flag) {
                res.setHeader('content-type', mime.lookup(pathname) + ';charset=utf-8');
                fs.createReadStream('.' + pathname).pipe(res);
            } else {
                res.statusCode = 404;
                res.end()
            }
        })
    }

}).listen(8080);

function explain(str) {
    let obj = {};
    str.replace(/([^=&]+)=([^=&]+)/g, (...arg) => {
        obj[arg[1]] = arg[2]
    });
    return obj
}