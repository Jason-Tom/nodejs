var fs = require("fs");

console.log("程序执行完毕1");
fs.readFile('input.txt', function(err, data) {
    if (err) {
        console.log(err.stack + "    1");
        return;
    }
    console.log(data.toString());
});
console.log("程序执行完毕2");
fs.readFile('input.txt', function(err, data) {
    if (err) {
        console.log(err.stack + "    2");
        return;
    }
    console.log(data.toString());
});
console.log("程序执行完毕3");
