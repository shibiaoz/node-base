var http = require('http');
var util = require('util');
http.createServer(function (request, response) {
    var body = [];
	console.log(request.url);
	console.log(request.method);
 //    console.log(request.headers);
	request.on('data', function (chunk) {
		body.push(chunk);
		console.log('chunk=> ' + chunk);
	});
	console.log(request.headers);
	console.log('------------------------');
	console.log(typeof util.inspect(request.headers));

    request.on('end', function () {
        body = Buffer.concat(body);
        console.log('-------');
        console.log(body.toString());
        response.write('sfsfd');
        response.end();
	});
}).listen(8080);
