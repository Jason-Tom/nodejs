var http = require('http');

http.createServer(function(request, response) {
    /*该方法里面是服务器处理和客户端响应信息，外面的是本电脑信息，即服务器本身*/

    // 发送 HTTP 头部 
    // HTTP 状态值: 200 : OK
    // 内容类型: text/plain
    response.writeHead(200, { 'Content-Type': 'text/plain' });

    // 发送响应数据 "Hello World"
    response.end('Hello World/asdf\n');
}).listen(8883);
// 服务端监听端口，服务器就是一直监听的，

// 终端打印如下信息
console.log('Server running at http://127.0.0.1:8888/asdf');
