var fs = require("fs");
var zlib = require('zlib');
// 链式流配合管道流用来压缩和解压文件
// 压缩文件能通过软件解压
// 压缩 input.txt 文件为 input.txt.gz
fs.createReadStream('input.txt')
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream('input.txt.gz'));
// 在可读流后面添加管道流，在在管道流里面添加压缩写入操作

console.log("文件压缩完成。");
