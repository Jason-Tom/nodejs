var router = require("./router");
var server = require("./server2");
// 导入无分先后

server.start(router.route);