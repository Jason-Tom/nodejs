var util = require('util');

function Person() {
    this.name = 'byvoid';
    this.toString = function() {
        return this.name;
    };
}
var obj = new Person();
console.log(util.inspect(obj));
// 简约的
// console.log(util.inspect(obj, 3, true, true));
// 完整的
console.log(util.inspect(obj, true));
// 一般的
