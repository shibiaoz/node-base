/*
 * this function is just to copy small size of file
 */
var fs = require('fs');
function copy (src, dst) {
    console.log(src);console.log('dst=> '+dst);
    fs.writeFileSync(dst, fs.readFileSync(src));
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
