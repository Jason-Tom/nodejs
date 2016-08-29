var fs = require("fs");
// 创建请求
var data = '';

// 创建可读流
var readerStream = fs.createReadStream('input.txt');
// 操作文件使用流，不同操作使用不同的流，操作的监听在相应事件上面加上去

// 设置编码为 utf8。
readerStream.setEncoding('UTF8');
// 注意要和文件对应好编码
// readerStream.setEncoding('ascii');

// 处理流事件 --> data, end, and error
// 看情况选择事件
readerStream.on('data', function(chunk) {
    data += chunk;
    // 初始为空检测
    // 该方法有参数包含文件最初的数据
    // 显示文本数据，包括换行和空格
    // 读取的数据是 字符串
});

readerStream.on('end', function() {
    // console.log(data);
});

readerStream.on('error', function(err) {
    console.log(err.stack);
});

console.log("程序执行完毕");
