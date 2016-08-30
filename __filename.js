console.log(__filename);
console.log(__dirname);
// console.log( global );
function printHello() {
    console.log("Hello, World!");
}
// 一秒后执行以上函数
// setTimeout(printHello, 1000);
// 只执行一次，该方法是异步的

function printHello1() {
    console.log("Hello, World!");
}
// 两秒后执行以上函数
// var t = setTimeout(printHello1, 1000);

// 清除定时器
// clearTimeout(t);

function printHello() {
    console.log("Hello, World!");
}
// 两秒后执行以上函数
// setInterval(printHello, 2000);
// 不停地循环
// console.time();
var a = 56;
console.log('byvoid%dio %d vyb', 1991, a);
// 类似printf输出，凡是后满可以不是参数,
console.log('-------------------------------------------------------');
console.info("程序开始执行：");

var counter = 10;
console.log("计数: %d", counter);

console.time("获取数据");
//
console.log('-------------------------------------------------------');
console.log('-------------------------------------------------------');
console.log('-------------------------------------------------------');

// 
console.timeEnd('获取数据');

console.info("程序执行完毕。")
