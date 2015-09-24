// path 模块，API 练习
var path = require('path');
var fs = require('fs');

var pathResult = path.resolve('/foo/bar', '../tmp/test');
console.log(pathResult);

var joinPath = path.join('/foom/bar','../tmp/aa/bb');
console.log(joinPath);


// relative
var path1 = path.resolve('tmp/', 'childtmp/');
console.log(path1);

var path2 = path.relative('/foom','tmp/test');
console.log(path2);

var dirName = path.dirname('./tmp/test.html');
console.log(dirName);

var fileName = path.basename('./tmp/test.html');
console.log(fileName);


var extName = path.extname('./tmp/test.html');
console.log(extName);

// file path is or not exists
// > 0.8.15 ,the api if bellow to fs
fs.exists('./tmp', function  (exists) {
   console.log('./tmp is or not exists : ' + exists);
});

var flag = fs.existsSync('./tmpd');
console.log('./tmp is or not exists, sync api s : ' + flag);

