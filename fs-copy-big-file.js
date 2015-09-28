/*
 * this function can  copy small and big size of file
 * use pipe and stream
 * read stream and write stream
 */
var fs = require('fs');
function copy (src, dst) {
     fs.createReadStream(src).pipe(fs.createWriteStream(dst));
}
function main (argv) {
	var src = 'README.md';
	var dst = './tmp/tmp.md';
    copy(src, dst);
}
main();
/**
 * copy files
 * just copy content
 * src must be filename and suffix name
 * dst must be sure path + file name + suffix name
 */
