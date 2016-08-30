function say(word) {
    console.log(word);
}

function say1(word) {
    console.log(word + "lalala");
}

function execute(someFunction, someFunction1, value) {
    // 方法可以调用多个方法
    someFunction(value);
    someFunction1(value);
    // 返回值就是该函数本身
}
// 把函数当作变量来传递给函数，方法调用方法

execute(say, say1, "Hello");
// 函数方法不带括号，内部调用他的时候时代有括号的
say("lalala");
// 方法变量输入要用字符串的形式
var gagaga = 'xixixi';
say(gagaga);
// 方法参数不用字符串输入的是变量
