var express = require('express');
var app = express();
var fs = require("fs");

var bodyParser = require('body-parser');
var multer = require('multer');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
// ？？？
app.use(multer({ dest: '/tmp/' }).array('image'));
// ？？？？

app.get('/index.htm', function(req, res) {
    res.sendFile(__dirname + "/" + "index.htm");
})

app.post('/file_upload', function(req, res) {

    console.log(req.files[0]);
    // 上传的文件信息,各种信息，再通过属性进一步调用
    // 上传的文件信息通过request的files方法的数组形式获取

    var des_file = __dirname + "/" + req.files[0].originalname;
    // __dirname或去文件当前目录（内置的）
    // console.log(req.files[0].originalname);
    // req.files[0].originalname是files的一个属性，提取文件名包含后缀名
    fs.readFile(req.files[0].path, function(err, data) {
      // 读取文件，获得打他数据，通过回调函数里面再执行文件写入
        console.log(req.files[0].path);
        // 文件路径，能用但是看不懂
        fs.writeFile(des_file, data, function(err) {
            if (err) {
                console.log(err);
            } else {
                response = {
                    message: 'File uploaded successfully',
                    filename: req.files[0].originalname
                };
            }
            // console.log(response);
            res.end(JSON.stringify(response) + "__dirname:" + __dirname);
        });
    });
})

var server = app.listen(8081, function() {

    var host = server.address().address
    var port = server.address().port

    console.log("应用实例，访问地址为 http://%s:%s", host, port)

})
