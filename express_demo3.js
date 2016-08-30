var express = require('express');
var app = express();

app.use(express.static('public'));
// 指定当前路径对应的文件夹，恰面不用斜杠
// 文件夹要存在
// 会按照文件本身的格式打开

app.get('/', function (req, res) {
   res.send('Hello World');
})

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("应用实例，访问地址为 http://%s:%s", host, port)

})