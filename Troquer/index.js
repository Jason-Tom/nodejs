var express = require('express');
var favicon = require('serve-favicon');

var app = express();
var server = require('http').createServer(app);
var bodyParser = require('body-parser');

var CONFIG = require('./config');
var fs = require('fs');
var colors = require('colors');

app.use(express.static(__dirname + '/public'));
// app.use(favicon(__dirname + '/public/favicon.ico'));

app.use(bodyParser.json({limit: '10240mb'}));
var api = require('./routes/api');

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('App', 'Copie');
    next();
});

app.use('/api/v1', api);

app.get('/', function(req, res) {
    res.sendfile('index.html');
});

server.setTimeout(0);
server.on('timeout', function(){
  console.log('超时了');
})

new Promise(function(_succ, _fail) {
    if (!fs.existsSync(CONFIG.tempfileDir)) _fail('请先创建临时文件夹：' + CONFIG.tempfileDir);
    else _succ();
}).then(function() {
    if (!fs.existsSync(CONFIG.fileDir)) throw '请先创建储存文件夹：' + CONFIG.fileDir;
    else return;
}).then(function() {
    server.listen(CONFIG.port);
    console.log(('Troquer is at port ' + CONFIG.port).green);
}).catch(function(e) {
    console.error(e.red);
})
