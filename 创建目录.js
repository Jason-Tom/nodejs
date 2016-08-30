var fs = require("fs");

console.log("创建目录 test");
fs.mkdir("test/3/lalala", function(err) {
    // 创建的是相对路径，头部没有斜杠用的是反斜杠，不能覆盖创建
    if (err) {
        return console.error(err);
    }
    console.log("目录创建成功。");
});
