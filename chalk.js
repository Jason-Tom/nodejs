var chalk = require('chalk');
var colors = require('ansi-256-colors');
// style a string 
console.log(chalk.blue('Hello world!'));
console.log();

// combine styled and normal strings 
console.log(chalk.blue('Hello') + 'World' + chalk.red('!'));

// compose multiple styles using the chainable API 
console.log(chalk.blue.bgRed.bold('Hello world!'));

// pass in multiple arguments 
console.log(chalk.blue('Hello', 'World!', 'Foo', 'bar', 'biz', 'baz'));
// 通过括号拼接
// nest styles 
console.log(chalk.red('Hello', chalk.underline.bgBlue('world') + '!'));
// 多种样式混合
// nest styles of the same type even (color, underline, background) 
var lalala = chalk.green(
    'I am a green line ' +
    chalk.blue.underline.bold('with a blue substring') +
    ' that becomes green again!'
);
console.log(lalala);

var name = 'Sindre';
console.log(chalk.green('Hello %s'), name);
// 加入变量变颜色

var test1 = chalk.yellow("gagaga");
// 变颜色的字符串能用变量获取后保持
console.log(test1);

var test2 = chalk.green(test1);
// 多层嵌套改变颜色，只接受最里面的那一层
console.log(test2);
var ctx = new chalk.constructor({enabled: false});
// var test3 = chalk.blue('hahaha');
// var test3 = chalk.cyan('hahaha');
var test3 = chalk.yellow.bgGreen('hahaha');
// 背景颜色混合使用，放置位置无所谓
// var test3 = chalk.black('hahaha');
// 有黑，白（默认），黄，绿，蓝，看文档
// var test3 = chalk.pueple('hahaha');
// 没紫色






// console.log(colors.fg.getRgb(0,0,0) + colors.bg.getRgb(0,0,0) + 'Hello world!'+ colors.reset);
//范围0到5，不起作用？
// console.log(colors.fg.codes(4) + colors.bg.codes(150) + 'Hello world!');
// 不起作用？
// console.log(colors.fg.standard(100) + colors.bg.standard(100) + 'Hello world!'+ colors.reset);
var lalalala = chalk.bold.yellow;
// 自定义样式
console.log(lalalala('Error!'));
console.log(test3);
console.log('..............');
