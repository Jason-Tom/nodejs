// exports.world = function() {
//   console.log('Hello World');
// }

// exports.world = function lalala() {
//     console.log('lalala');
// }

// 统一用一个接口来装载比较好管理，语句也能放在方法里面，算是接口的一个规范吧
exports.world = function Hello() {
    var name;
    this.setName = function(thyName) {
        name = thyName;
    };
    this.sayHello = function() {
        console.log('Hello ' + name);
    };
};
