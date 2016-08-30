//express_demo.js 文件
var express = require('express');
// 引入express模块
var app = express();
// 创建express()对象（他的创建方法应该是高级版）
// 查看模块文件

app.get('/', function(req, res) {
    // 服务器处理客户端请求的方法前面是什么路径下由他执行
    res.send('Hello World'+"////////////req.app:"+req.app+"////////////req.baseUrl:"+req.baseUrl);
    // send只能有一个
    

})

var server = app.listen(8081, function() {
    // 监听端口指定回调函数

    var host = server.address().address
    var port = server.address().port

    console.log("应用实例，访问地址为 http://%s/%s", host, port)

})
