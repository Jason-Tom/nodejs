var http = require('http');
var querystring = require('querystring');
var util = require('util');

http.createServer(function(req, res) {
    var post = ''; //定义了一个post变量，用于暂存请求体的信息

    req.on('data', function(chunk) { //通过req的data事件监听函数，每当接受到请求体的数据，就累加到post变量中
        post += chunk;
        // 检测到有数据时，触发监听事件，监听事件参数含有请求参数？
    });

    req.on('end', function() { //在end事件触发后，通过querystring.parse将post解析为真正的POST请求格式，然后向客户端返回。
        post = querystring.parse(post);
        // 返回post的全部请求变量和对应值
        res.writeHead(200,{"Content-Type": "text/html; charset=utf-8" });
        res.end(util.inspect(post)+"成功啦！！！"+post);
    });
}).listen(3001);
