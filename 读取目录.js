var fs = require("fs");

console.log("查看 test 目录");
fs.readdir("test", function(err, files) {
    if (err) {
        return console.error(err);
    }
    files.forEach(function(file) {
        console.log(file);
        // 显示子文件夹，和文件夹里面的文件名
    });
});
