function Hello() {
    var name;
    this.setName = function(thyName) {
        name = thyName;
    };
    this.sayHello = function() {
        console.log('Hello ' + name);
    };
};

function hahaha() {
    var name;
    this.setName = function(thyName) {
        name = thyName;
    };
    this.sayHello = function() {
        console.log('Hello ' + name);
    };
};
module.exports = Hello;
module.exports = hahaha;
// 一个js文件能创建多个模块，通过一一对应多次创建
// 直接接口对应方法对象，不用新建一个一样的对象来操作，前提是方法要有方法名
// 更加省事
