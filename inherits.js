var util = require('util');

function Base() {
    this.name = 'base';
    this.base = 1991;
    this.sayHello = function() {
        console.log('Hello ' + this.name);
    };
}
Base.prototype.showName = function() {
    console.log(this.name);
};
Base.prototype.showName1 = function() {
    console.log(this.name + "lalala");
};
Base.prototype.showName2 = "gagaga";
// 对于被继承方法来讲，是给被函数方法添加新方法或属性，但是不包括在方法原型里面

function Sub() {
    this.name = 'sub';
}
util.inherits(Sub, Base);
// 要继承的对象放在左边
var objBase = new Base();
objBase.showName();
objBase.showName1();
objBase.sayHello();
console.log(objBase.showName2);
console.log(objBase);
// 被继承的对象，只包含自己的函数方法和属性
var objSub = new Sub();
// 继承的方法对象不包括被继承方法的属性和方法，只包含自己的属性和方法及调用继承方法中原型的方法属性的能力（继承就是把该方法属性导入到自己的方法中），对继承方法来讲，被继承方法只是一个空壳的作用
objSub.showName();
objSub.showName1();
console.log(objSub.showName2);
// 打印出继承的属性
//objSub.sayHello(); 
console.log(objSub);
