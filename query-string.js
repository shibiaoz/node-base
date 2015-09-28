var querystring = require('querystring');
var queryObj = querystring.parse('foo=bar&baz=qux&baz=quux&corge');
console.log(queryObj);
