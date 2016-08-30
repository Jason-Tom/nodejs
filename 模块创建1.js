// var Hello = require('./hello是1');
// var hahaha = require('./hello是1');
// // 创建模块对象之前要先引入模块对象，一次引用一个模块只能创建一个对象
// hello = new Hello();
// lalala = new hahaha();
// hello.setName('BYVoid');
// hello.sayHello();
// lalala.setName('啦啦啦');
// lalala.sayHello();
// // 模块创建对象可以多次调用，相当于java封装的方法
// xixixi = new hahaha();
// xixixi.setName('哈哈哈');
// xixixi.sayHello();
var aaa = require('./hello是1');
aaa.a();