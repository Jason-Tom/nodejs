var Hello = require('./hello1');
var hahaha = require('./hello1');
// 创建模块对象之前要先引入模块对象，一次引用一个
hello = new Hello();
lalala = new Hello();
hello.setName('BYVoid');
hello.sayHello();
lalala.setName('啦啦啦');
lalala.sayHello();
// 模块创建对象可以多次调用，相当于java封装的方法
xixixi = new hahaha();
xixixi.setName('哈哈哈');
xixixi.sayHello();
