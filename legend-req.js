// http 练习，抓取网页
// cheerio 练习，方便解析dom

var http = require('http');
var fs = require('fs');
var cheerio = require('cheerio');
var url = 'http://legend.baidu.com/preview/legend/32239ebf-635b-11e5-85d7-70e2840c1e14#page=0';
var url = 'http://shushuo.baidu.com/legend/c935166f-5b88-11e5-85d7-70e2840c1e14';
http.get(url).on('error', function () {
    console.log('获取数据失败');
}).on('response', function (res){
    var html = '';
    res.on('data', function (data) {
        console.log(data);
        html += data;
    });

    res.on('end', function  () {
        var buf = new Buffer(html);
        fs.open("tmp/legend2.html","w",function(err,fd){
            fs.write(fd,buf,0,buf.length,0,function(err,written,buffer){});
        });
    });
});
