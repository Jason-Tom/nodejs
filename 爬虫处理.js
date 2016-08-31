var http = require('http');
var cheerio = require('cheerio');
var url = 'http://www.imooc.com/learn/348';

function filterchapters(html) {
    var $ = cheerio.load(html);
    var chapter = $('.learnchapter');
    // [{
    //     chaptrTitle: '',
    //     videos:[{
    //         title: '',
    //         id: ''
    //     }]
    // }]
    var courseData=[];
}
http.get(url, function(res) {
    var html = '';
    res.on('data', function(data) {
        // data是返回html源码，包括js？
        html += data;
    })
    res.on('end', function() {
        filterchapters(html);
    })
}).on('error', function() {
    console.log("获取课程数据出错");
})
