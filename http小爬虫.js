var http = require('http');
var url = 'http://www.imooc.com/learn/348';
http.get(url, function(res) {
    var html = '';
    res.on('data', function(data) {
      // data是返回html源码，包括js？
        html += data;
    })
    res.on('end', function() {
        console.log(html);
    })
}).on('error', function() {
    console.log("获取课程数据出错");
})
