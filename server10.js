var http = require('http');
var fs = require('fs');
var url = require('url');


// 创建服务器的函数，但是还没有绑定端口
http.createServer(function(request, response) {
    // 有一个缺省参数（先不动），后面是回调函数（第一个参数是请求，第二个参数是响应，都有各自的属性和方法）
    // 解析请求，包括文件名
    var pathname = url.parse(request.url).pathname;
    //截取的路径名含有斜杠

    // 输出请求的文件名
    console.log("Request for " + pathname + " received." + pathname.substr(1));

    // 从文件系统中读取请求的文件内容
    // 可以打开多种文件，但是要有布局就要按照html标准显示，图片会出现乱码，最好当成静态文件打开
    fs.readFile(pathname.substr(1), function(err, data) {
        // substr提取文件名，相同目录下不需要带上/，通过该方法来去除pathname前面的斜杠
        if (err) {
            console.log(err);
            // HTTP 状态码: 404 : NOT FOUND
            // Content Type: text/plain
            response.writeHead(404, { 'Content-Type': 'text/html' });
        } else {
            // HTTP 状态码: 200 : OK
            // Content Type: text/plain
            response.writeHead(200, { 'Content-Type': 'text/html' });

            // 响应文件内容
            response.write(data.toString());
            // 会把读到的内容通过html的形式显示
            // response.write(data);
            // 为什么要转换成字符串
        }
        //  发送响应数据
        response.end();
    });
}).listen(8081);
// 监听端口
// nodejs创建的服务器就是在改端口目录下，通过js进行操作文件，服务器的作用只是定义一个位置

// 控制台会输出以下信息
console.log('Server running at http://127.0.0.1:8081/');
