var http = require('http');
var fs = require('fs');

// req.url
// 这里根据URL就可以实现一个简单的路由机制，暂且不去实现了
// 等有时间的时候在封装下，学习学习如何做路由的机制，
// 先写下大致的想法吧
// 根据URL  分析URL 对应不同的action 这里的相当于去require 一个模块
// action中去读取静态文件，做各种变量的替换和语法等等。。。
// response 响应返回给浏览器端
//

http.createServer(function  (req, res) {
    if (req.url == '/') {
        res.writeHeader(200,{'Content-Type':'text/html'});
        res.write('welcome to home page');
        res.end();
    }
    else if (req.url == '/weather') {
        fs.readFile('./tmp/test.html', function (err, data) {
            res.writeHeader(404, {'Content-Type':'text/html'});
            if (err) throw err;
            res.write(data);
            res.end();
        });
    }
    else {
        res.writeHeader(404, {'Content-Type':'text/html'});
        res.write('404 error page ');
        res.end();
    }
}).listen(8080, function () {
    console.log('server start ....');
});
