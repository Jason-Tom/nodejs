buf = new Buffer(26);
for (var i = 0; i < 26; i++) {
    buf[i] = i + 97;
}

console.log(buf.toString('ascii')); // 输出: abcdefghijklmnopqrstuvwxyz
console.log(buf.toString('ascii', 0, 5)); // 输出: abcde
console.log(buf.toString('utf8', 0, 8)); // 输出: abcde
// utf-8编码支持ascii编码
console.log(buf.toString(undefined, 0, 26)); // 使用 'utf8' 编码, 并输出: abcde
// 输出前一个下表索引到结尾下标前一个索引
lala = new Buffer(2);
// 索引从0开始，有两个
lala[0] = 'a';
lala[1] = '啊';
// ascii有范围限定，超出了会出新乱码
// buffer是一个数组，要指定索引，指定输入
// 缓冲区放置的空间大小？
// 可以读取中文？（如何处理）
console.log("-----------------------------------------"); //按照字符串输出
console.log(lala.toString('ascii')); //按照字符串输出，不是ascii指定范围内的数字和字符数字，不能正常显示出来，中文和字符串不能通过ascii显示
console.log(lala.toString(undefined, 0, 2));
console.log(buf.toString('utf8', 0, 1));

gaga = new Buffer(1);
// gaga[0] = 98;
// gaga[0] = '98';
// 字符串数字会ascii转换成数字
// gaga[0] = "asd";
// gaga[0] = "a";
// gaga[0] = 'd';
// 字符和字符串得不到ascii的正确转换，会返回空值
// gaga[0] = '阿';
// 中文的ascii也得报道正确的转换
// console.log("gaga[0]:" + gaga.toString('ascii'));
// ascii方面的转换
xixixi = new Buffer(2);
// 空的字符串给出的值是随机的
// xixixi[0] = 99;
// xixixi[1] = 100;
// utf-8会将数字转换成对应的字母符号，没有初始化的得到问号
xixixi[0] = '99';
xixixi[1] = '100';
// utf-8也会将字符串数字转换成对应的字母符号，没有初始化的得到问号
// xixixi[0] = '啊';
// xixixi[1] = "b";
// 单个索引不能存进非数字字符和字符串
console.log(xixixi.toString('utf-8', 0, 2));
// utf-8的读法
// var hahaha = Buffer("lalala");
// 字母字符串，按照指定索引位置输出
// var hahaha = Buffer('a');
// 单个字母字符串输出和多个字母字符串输出一样
var hahaha = Buffer('a啊啊司法所');
// 中文字符串必须3个中文字节一起读，才能变异出中文，不然问号，顺序不对也会问号
console.log(hahaha.toString('utf-8', 0, 3));
