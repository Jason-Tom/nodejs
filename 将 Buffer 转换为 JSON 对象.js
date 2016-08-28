// var buf = new Buffer('www.runoob.com');
// 字母符号，一个对应一个8位二进制数
// var buf = new Buffer('啊是啊');
// 中文一个字对应3个八位二进制数
var buf = new Buffer(10);
// 没有给定二进制初始化，会得到0到255之间的随机数
// var buf = new Buffer([10, 20, 30, 40, 50]);
// var buf = new Buffer("www.runoob.com", "utf-8");
// buffer存进去的是二进制数，数字会转换成一个个二进制数，每一个索引是一个8位二进制数，
var json = buf.toJSON(buf);

console.log(json);
// json数据可以通过log遍历出来
// 转换成json数据便于操作
// 读取各种buffer展示出来的形式
