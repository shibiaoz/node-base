/**
 * Created by zhangshibiao on 15/9/24.
 */
var http = require('http');
var fs = require('fs');
var htmlPath = './tmp/test.html';
var httpServer = http.createServer(function (req, res) {
    console.log('....server start.....');
    var rs = fs.createReadStream(htmlPath);
    // 读写流集成在管道中，等同下下面的实现
    // res.writeHeader(200,{'Content-Type':'text/html'});
    // rs.pipe(res,{end: false});
    // rs.on('end', function () {
    //     res.end();
    // });

    res.writeHeader(200,{'Content-Type':'text/html'});
    rs.on('data', function (blockData) {
        // 如果不能写入核数据，就会被缓存到队列中，容易导致
        // 内存泄露，这是暂停读取文件流
        if (!res.write(blockData)) {
            rs.pause();
        }
    });
    // 等待流被清空，唤醒文件读写流继续读写
    res.on('drain', function () {
        rs.resume();
    });

    rs.on('end', function () {
        res.end();
    });
}).listen(8080);

httpServer.on('error', function () {
    console.log('....server error.....');
});
