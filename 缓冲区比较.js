// var buffer1 = new Buffer('ABC');
// var buffer2 = new Buffer('ABCD');
// var buffer1 = new Buffer('1');
// var buffer2 = new Buffer('12');
// 数字和字母，按照字符串逐个比较，类似传统数字比较，默认从高位开始比较，位数不足用0补齐
var buffer1 = new Buffer('啊');
var buffer2 = new Buffer('12');
// 中文字符串也能比较，本质都是二进制的比较
var result = buffer1.compare(buffer2);
console.log(buffer1.toJSON());
console.log(buffer2.toJSON());

if (result < 0) {
    console.log(buffer1 + " 在 " + buffer2 + "之前");
} else if (result == 0) {
    console.log(buffer1 + " 与 " + buffer2 + "相同");
} else {
    console.log(buffer1 + " 在 " + buffer2 + "之后");
}
