// define legend pages
//var url = 'http://www.imooc.com/learn/348';
var url = 'http://shushuo.baidu.com/legend/c935166f-5b88-11e5-85d7-70e2840c1e14';
var http = require('http');
var cheerio = require('cheerio');


http.get(url, function (res) {
    var html = '';
    res.on('data', function (data) {
        html += data;
    });
    res.on('end', function  () {
        var $ = cheerio.load(html);
        var bodyHtml = $('body').html();
        var bodyScript = $('script','body');
        bodyScript.each(function (index, value) {
            console.log($(value).attr('src'));
        });
    });
}).on('error', function () {
    console.log('获取数据失败');
});

// require cheeryio to load html to generate jquery object
// request legend page
// analysis legend page to json
// legend json => header , body , script
// script header-script footer-script

