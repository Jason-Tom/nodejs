var buffer1 = new Buffer('菜鸟教程 ');
var buffer2 = new Buffer('www.runoob.com');
var buffer4 = new Buffer('阿斯劳    动法sdfsdfs');
var buffer3 = Buffer.concat([buffer1, buffer2, buffer4]);
console.log("buffer3内容: " + buffer3.toString());
// 显示内容通过。toString()函数指定格式输出，要符合相应输出规则
// 输出内容包含空格
// 合并字符串使用.concat函数，里面合并的字符串按照顺序放好
// 可以多个合并
// 里面只能放置变量
