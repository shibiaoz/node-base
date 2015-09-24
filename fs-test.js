// 文件读写相关API 练习

var fs = require('fs');


// file stat api test
// fileStats(fs);

// open file and read and write
// readFile(fs, './tmp/test.html');


// open file and write content to it
writeFile(fs, './tmp/test2.html');

/**
 * [writeFile description]
 * @param  {Object} fs       [description]
 * @param  {string} filePath [description]
 * @return {[type]}          [description]
 */
function writeFile (fs, filePath) {
    fs.open(filePath, 'a', function (err, fd) {
        if (err) {
            throw err;
            fs.close(fd, function () {
                console.log('writeFile open erro,fs.close');
            });
        }
        var writeBuffer = new Buffer('this is string to append');
        var bufferPos  = 0;
        var bufferLen = writeBuffer.length;
        var filePosition = null;
        fs.write(fd,
            writeBuffer,
            bufferPos,
            bufferLen,
            filePosition,
            function (err, written) {
                if (err) throw err;
                console.log(written);
                fs.close(fd, function () {
                    console.log('writeFile ends,fs.close');
                });
            }
        );
    });
}


/**
 * [readFile description]
 * @param  {Object} fs       [description]
 * @param  {string} filePath [description]
 * @return {[type]}          [description]
 */
function readFile (fs, filePath) {
    fs.open(filePath, 'a+', function (err, fd) {
        if (err) {
            throw err;
            fs.close(fd, function () {
                console.log('readFile open,fs.close');
            });
        }
        var readBuffer = new Buffer(1024);
        var bufferLen = readBuffer.length;
        var bufferOffset = 0;
        var fileStartIndex = 0;

        fs.read(fd,
            readBuffer,
            bufferOffset,
            bufferLen,
            fileStartIndex,
            function (err, readBytes) {
                if (err) {
                    throw err;
                    fs.close(fd, function () {
                        console.log('readFile open,fs.close');
                    });
                }
                if (readBytes > 0) {
                    var readContent = readBuffer.slice(0, readBytes);
                    console.log(readContent.toString());
                    fs.close(fd, function () {
                        console.log('readFile ends,fs.close');
                    });
                }
            }
        );
    });
}
/**
 * [fileStats description]
 * @param  {Object} fs [description]
 * @return {[type]}    [description]
 */
function fileStats (fs) {
  fs.stat('./tmp', function  (err, stats) {
    if (err) {
        console.log(err);
        // throw err;
    }
    if (stats.isFile()) {
        console.log('./tmp is File ');
    }
    else if (stats.isDirectory()) {
        console.log('./tmp is directory');
    }
});

}
