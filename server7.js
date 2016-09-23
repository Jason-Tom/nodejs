var express = require('express');
var app = express();
var qs = require('querystring');

app.use(express.static('public'));

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // 允许跨域
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});


// app.use(express.bodyParser());


app.get('/index.htm', function(req, res) {
    res.sendFile(__dirname + "/" + "index.htm");
})

app.get('/process_get', function(req, res) {
    // response.setHeader("Access-Control-Allow-Origin:*");
    // response.setHeader("Access-Control-Allow-Methods:POST,GET");
    // 输出 JSON 格式
    response = {
        first_name: req.query.first_name,
        // 通过req.query获取传过来的变量
        last_name: req.query.last_name
    };
    // 通过json接收数据
    console.log(response);
    res.end(JSON.stringify(response));
    // 查看对应文档
    // 返回数据给客户端
    // 中文乱码？
    // html不能直接输出json数据，不认html会显示错误信息
    // res.end(response);
})

app.post('/', function(req, res) {
        response = {
            first_name: req.query.first_name,
            last_name: req.query.last_name
        };
        console.log(response);
        res.end(JSON.stringify(response));

    })
    // superagent可以用这种方式传


app.post('/process_post', function(req, res) {
    // 读取post字符串，要将整个字符串读下来，在转换成json数组
    // 要导入require('querystring');
    var body = '';
    req.on('data', function(data) {
        body += data;
        if (body.length > 1e6)
            req.connection.destroy();
    });

    req.on('end', function() {
        var post = qs.parse(body);
        console.log(post);
        res.json(post);
        // 有回调函数的都要小心异步
        // 返回json数据，该方法默认有将json字符串转换成json对象
        // res.end(JSON.stringify(post));
    });

})

var server = app.listen(8081, function() {

    var host = server.address().address
    var port = server.address().port

    console.log("应用实例，访问地址为 http://%s:%s", host, port)

})
