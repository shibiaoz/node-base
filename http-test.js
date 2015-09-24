// http 练习，抓取网页
// cheerio 练习，方便解析dom

var http = require('http');
var fs = require('fs');
var cheerio = require('cheerio');

var urlOption = {
    host: 'shushuo.baidu.com',
    path: '/legend/c935166f-5b88-11e5-85d7-70e2840c1e14'
};
var url = 'http://m.weather.com.cn/mweather/101010100.shtml';
var options = {
    url: url,
    headers: {
        'Referer': 'http://m.weather.com.cn/',
        'User-Agent': "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.99 Safari/537.36"
    }
};
http.get(url).on('error', function () {
    console.log('获取数据失败');
}).on('response', function (res){
    var html = '';
    res.setEncoding('utf8');
    res.on('data', function (data) {
        html += data;
    });

    res.on('end', function  () {
        var $ = cheerio.load(html);
        var days = $('.days7', 'body');
        console.log(days.html());
        var file = fs.createWriteStream('./tmp/test.html');
        fs.open("tmp/test.html","w",function(err,fd){
            var buf = new Buffer(days.html());
            fs.write(fd,buf,0,buf.length,0,function(err,written,buffer){});
        });
    });
});
