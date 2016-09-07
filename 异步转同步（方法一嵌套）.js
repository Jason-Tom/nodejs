var func1 = function(req, res, callback) {
    // 上句相当于function function_name (argument) {
    console.log('func1');
    setTimeout(function() {
        console.log('in func1');
        callback(req, res, 1);
    }, 3000);
}


var func2 = function(req, res, callback) {
    console.log('func2');
    setTimeout(function() {
        console.log('in func2');
        callback(req, res, 2);
        // 使用callback函数
    }, 2000);
}

var func3 = function(req, res, callback) {
    console.log('func3');
        setTimeout(function() {
            console.log('in func3');
            callback(req, res, 3);
        }, 1000);
    }
// var req = null;
// var res = null;
// var callback = function(){};
// func1(req,res,callback);
// func2(req,res,callback);
// func3(req,res,callback);
// nodejs可以运行js文件

//深层嵌套
var req = null;
var res = null;

// func1(req, res, function() {
//     // 回调函数运行完了再调用下一层
//     func2(req, res, function() {
//         func3(req, res, function() {
//             process.exit(0);
//             // 最后结束
//         })
//     });
// });
// 多层嵌套解决
//



func1(req, res, func2(req, res, 
        func3(req, res, function() {
            // process.exit(0);
        })
    )
);