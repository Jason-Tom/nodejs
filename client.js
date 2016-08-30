var http = require('http');

// 用于请求的选项
// 不能重复请求？
var options = {
    host: 'localhost',
    port: '8081',
    path: '/index.htm',
    method: 'GET'
};

// 处理响应的回调函数
var callback = function(response) {
    // requste回调函数只有一个response参数
        // 不断更新数据
        var body = '';
        response.on('data', function(data) {
            // 有数据，读取数据到一个集合
            body += data;
        });

        response.on('end', function() {
            // 数据接收完成，执行相关回调函数
            console.log(body);
        });
    }
    // 向服务端发送请求
var req = http.request(options, callback);
// 客户端请求，调用http模块，调用request请求函数，函数第一个参数请求选项，第二个参数是回调函数
req.end();
