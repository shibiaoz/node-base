var url = require('url');
var urlStr = 'http://localhost:8080/aa/bc/d?id=1231&test=1232&name=烧豆腐';
console.log(url.parse(urlStr, true));
var urlParamObj = { protocol: 'http:',
		  slashes: true,
		    auth: null,
			  host: 'localhost:8080',
			    port: '8080',
				  hostname: 'localhost',
				    hash: null,
					  search: '?id=1231&test=1232&name=烧豆腐',
					    query: { id: '1231', test: '1232', name: '烧豆腐' },
						  pathname: '/aa/bc/d',
						    path: '/aa/bc/d?id=1231&test=1232&name=烧豆腐',
							  href: 'http://localhost:8080/aa/bc/d?id=1231&test=1232&name=烧豆腐' };
var resoleUlrStr = url.format(urlParamObj);
console.log(resoleUlrStr);
