/**
 * Created by zhangshibiao on 15/9/24.
 */
var fs = require('fs');
var rs = fs.createReadStream('./tmp/test.html',{
    start:0
});
var html = '';
rs.on('data', function (data) {
   html += data;
});
rs.on('end', function () {
    console.log(html);
});