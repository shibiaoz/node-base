var http = require('http');
var fs = require('fs');
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
