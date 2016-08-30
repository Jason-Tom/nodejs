function yyyyyyy(someFunction, value) {
    // 函数被调用时不能带括号
    someFunction(value);
    // 内部执行带括号
}
// 匿名函数，加上函数之间调用函数的能力，把js的执行变成以方法为基本单位的执行
yyyyyyy(function(word) { console.log(word) }, "Hello");

function gagaga(argument) {
    console.log("gagaga");
}
gagaga();
console.log("lalala");
// 语句直接执行
yyyyyyy(function(Hello) { console.log('hhhhhhhhh') });
// 匿名函数没有名称但是能传递变量
// 语句执行准转换成匿名函数形式和函数形式
// 匿名函数只能现用，不能调用，所以也不存在，其他函数对它的调用
yyyyyyy(gagaga, 'a');
// 有名函数调用，要遵从定义函数的调用规则
