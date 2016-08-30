var http = require("http");
var url = require("url");

function start(route) {
    function onRequest(request, response) {
        // 服务器创建时，配置的方法
        // request和response有对应的方法和属性可调用
        var pathname = url.parse(request.url).pathname;
        // 通过url模块，访问截取请求方访问服务器的路径，，根路径为斜杠，
        console.log("请求 " + pathname + " 服务.");

        route(pathname);
        // 通过自己写的方法，标明访问的服务器路径

        // response.writeHead(200, {"Content-Type": "text/plain"});
        // response.writeHead(200, { 'Content-Length': 3,"Content-Type": "text/html; charset=utf-8" });
        response.writeHead(200, {"Content-Type": "text/html; charset=utf-8" });
        // 必须
        // 中文编码
        // 响应返回给请求端，状态和头部长度编码（可以省略,不写默认body长度），第二个参数不明？
        // 使用json格式
        response.write("end啦啦啦aaa");
        // 测试
        // 返回数据到html上面（不知道如何设定编码？）
        response.end("lalala");
        // 必须
        // 每次都要调用，表示结束放入数据，相当于再次调用response.write，在后面追加内容
    }

    http.createServer(onRequest).listen(8888);
    console.log("服务启动");
    // 可以放中文但是注意编码
}

exports.start = start;
