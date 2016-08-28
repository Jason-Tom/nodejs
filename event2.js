//event.js 文件
var events = require('events');
var emitter = new events.EventEmitter();
emitter.on('someEvent', function(arg1, arg2) {
    console.log('listener1', arg1, arg2);
});
emitter.on('someEvent', function(arg1, arg2) {
    // someEvent事件名
    console.log('listener2', arg1, arg2);
    // function是监听器
});
emitter.on('someEvent', function(arg1, arg2) {
    // .on注册事件
    console.log('listener3', arg1, arg2);
    // arg1参数
});
emitter.emit('someEvent', 'arg1 参数', 'arg2 参数');
// .emit触发事件
// 按照顺序依次执行触发事件监听器

// 触发一个事件操作多个方法
