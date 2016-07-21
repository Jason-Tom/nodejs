var http1 = require('http');
// 创建多个http也只是对应一个ip地址，要想设定多个访问进程，要设定不同端口
// 生成一个http对象，来执行他的方法

http1.createServer(function(request, response) {
    response.writeHead(200, { 'Content-Type': 'text/plain' });

    response.end('1234\n');
}).listen(1234);
// 一个http可以设定多个
http1.createServer(function(request, response) {

    response.writeHead(200, { 'Content-Type': 'text/plain' });

    response.end('1235\n');
}).listen(1235);

console.log('Server running at http://127.0.0.1:1235/');
