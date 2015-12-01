
/**
 * var url = 'http://0557.zxdyw.com/ajax/vote.ashx';
var data = {
    vt:2,
    vd:219,
    vld:3903
};
$.ajax({
    url: url,
    type: 'POST',
    data: data,
    success: function(result) {
        console.log(result)
    },
    error: function() {

    }
});

 * @type {Object}
 */
    var http = require('http');


    function post () {
        var data = {
        vt:2,
        vd:219,
        vld:3903
    };

    data = require('querystring').stringify(data);
    var opt = {
        method: "POST",
        host: "0557.zxdyw.com",
        path: "/ajax/vote.ashx",
        headers: {
            "Content-Type": 'application/x-www-form-urlencoded',
            "Content-Length": data.length,
            "X-FORWARDED-FOR": "1.1.1.1,114.248.238.236",
            "x-real-ip": "114.248.238.236"
        }
    };

    var req = http.request(opt, function (serverFeedback) {
        if (serverFeedback.statusCode == 200) {
            var body = "";
            serverFeedback.on('data', function (data) { body += data; })
                          .on('end', function () { console.log(body) });
        }
        else {
            console.log(serverFeedback);
        }
    });
    req.write(data + "\n");
    req.end();

    }
    var i = 1;
    var timer;
    timer = setInterval(function function_name () {
          post();
          i++;
          if (i > 10) {
            clearInterval(timer);
          }
    },2000);

