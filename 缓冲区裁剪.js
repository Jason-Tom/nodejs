var buffer1 = new Buffer('runoob');
// 剪切缓冲区
var buffer2 = buffer1.slice(0, 2);
// 裁剪缓冲区，要将裁剪部分赋值给新的缓冲区，和限定位置复制有何区别
console.log("buffer1 content: " + buffer1.toString());
console.log("buffer2 content: " + buffer2.toString());
