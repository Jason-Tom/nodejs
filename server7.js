var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/index.htm', function(req, res) {
    res.sendFile(__dirname + "/" + "index.htm");
})

app.get('/process_get', function(req, res) {

    // 输出 JSON 格式
    response = {
        first_name: req.query.first_name,
        // 通过req.query获取传过来的变量
        last_name: req.query.last_name
    };
    // 通过json接收数据
    console.log(response);
    res.end(JSON.stringify(response));
    // 返回数据给客户端
    // 中文乱码？
    // html不能直接输出json数据，不认html会显示错误信息
    // res.end(response);
})

app.post('/process_post', function(req, res) {

    response = {
        first_name: req.query.first_name,
        last_name: req.query.last_name1
    };
    console.log(response);
    res.end(JSON.stringify(response));

    // var post = '';
    // req.on('data', function(chunk) {
    //     post += chunk;
    // });
    // req.on('end', function() {
    //     post = querystring.parse(post);
    //     res.end(util.inspect(post));
    // });
})

var server = app.listen(8081, function() {

    var host = server.address().address
    var port = server.address().port

    console.log("应用实例，访问地址为 http://%s:%s", host, port)

})
