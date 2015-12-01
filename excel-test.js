/**
 * reference to https://github.com/mgcrea/node-xlsx
 *
 *
 *
 *
 *
 */

var xlsx = require('node-xlsx');
var obj = xlsx.parse(__dirname + '/personal_info.xls'); // parses a file
/**
 * obj =>
 * [
        {
            name:
            data:[Object,Object]
        }
 * ]
 *
 */
// console.log(obj[1]['data'][0].length)
// console.log(obj[1]['data'][1].length)

var firstRow = [];
obj[1]['data'][0].forEach(function (v, i) {
    firstRow.push(v.trim());
});
// console.log(firstRow);
// console.log(obj[1]['data'][1])
// console.log(firstRow.indexOf('部门'));
// console.log(firstRow.indexOf('职位'));
var num = 0;
obj[1]['data'].slice(1).forEach(function (row,index) {
    var tmp1 = (row[4] + "").trim().substr(0,3);
    var tmp2 = (row[12] + "").trim().substr(0,3);
     // console.log(tmp1 + "__" + tmp2)
     // console.log(row[4])

    if (tmp1 != tmp2) {
        // console.log(row[12]);
        if (parseInt(row[12]) == 113016) {
            // nothing
            console.log(row[12])
        }
        else {
            // 113006 就是对的
            // console.log(row[4] + "__" + row[12]);
            num++;
        }
        // console.log(firstRow('部门'));
    }
});
console.log(num);




// data.forEach(function (value,index) {
//     console.log(value);
//     if (index < 1) {
//         // show 100 row
//         value.forEach(function  (col,key) {
//             console.log("  " + col)
//         });
//         console.log("\n");
//     }
//     // value is A Row
// });
//
//
var fs = require('fs');
function writeFile (fs, filePath, buffer) {
    fs.open(filePath, 'a', function (err, fd) {
        if (err) {
            throw err;
            fs.close(fd, function () {
                console.log('writeFile open erro,fs.close');
            });
        }
        // var writeBuffer = new Buffer('this is string to append');
        var writeBuffer = buffer;
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
 * build xlsx to write to xlsx file,open error
 * why?
 *
 * @type {Array}
 */
var toWriteData = [[1,2,3],[true, false, null, 'sheetjs'],['foo','bar',new Date('2014-02-19T14:30Z'), '0.3'], ['baz', null, 'qux']];
var buffer = xlsx.build([{name: "mySheetName", data: toWriteData}]); // returns a buffer
console.log(buffer.toString(''));
writeFile(fs, (__dirname+'/test.xlsx'), buffer);

