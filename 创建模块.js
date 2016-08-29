// var hello = require('./hello');
// 相当于把world方法导入到该文件中，用一个新的变量来代替
// 
// world = function() {
//     console.log('Hello World');
// }
// world();
// world算是一个新对象
// 
// var hello = require('./hello');
// hello.world();
var world = require('./hello1');
world = new world();
world.setName('BYVoid');
world.sayHello();
// 间接创建一个同样的新对象来执行