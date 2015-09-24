// node 进程相关 ，这块项目暂时用不到，简单了解下，
// 不练习所有API

var childProcess = require('child_process');
var exec = childProcess.exec;
exec('lsl', function (err, stdout, stderr) {
    if (err) throw err;
    console.log(stdout);
    console.log('--------------');
    console.log(stderr);
});
