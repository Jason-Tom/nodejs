var buffer1 = new Buffer('阿斯');
// 拷贝一个缓冲区
var buffer2 = new Buffer(3);
buffer1.copy(buffer2);
// 将缓冲区复制到，空间不够，多余的会溢出
console.log("buffer2 content: " + buffer2.toString());
