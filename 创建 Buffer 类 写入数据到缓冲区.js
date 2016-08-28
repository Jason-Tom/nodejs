var buf = new Buffer("www.runoob.com", "utf-8");
// 创建一个非空的buffer缓冲区，默认编码是utf-8，被写入是，会被清空再写入
// var buf = new Buffer([10, 20, 30, 40, 677676]);
// 啥意思
// buf = new Buffer(24);
// 创建的是一个空的buffer缓冲区
// buf = new Buffer(6);
// 重名的会覆盖前面
// 多于放不下的会溢出
// 创建的单位是字节，因为是本地文件
// len = buf.write("www.runoob.com", 8);
// 从第几个buffer缓冲区索引开始写起，缓冲区不够写的会溢出
// 一个字符字母为一个字节
len = buf.write("www", 0);
// 写入到缓冲区的长度？（哪个长度）
// 编码如何加进去
console.log("写入字节数 : " + len);
