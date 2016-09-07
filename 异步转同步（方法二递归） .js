var func1 = function(req, res, callback) {
    // 上句相当于function function_name (argument) {

    setTimeout(function() {
        console.log('in func1');
        callback(req, res, 1);
    }, 3000);
}
var func2 = function(req, res, callback) {
    setTimeout(function() {
        console.log('in func2');
        callback(req, res, 2);
    }, 2000);
}

var func3 = function(req, res, callback) {
    setTimeout(function() {
        console.log('in func3');
        callback(req, res, 3);
    }, 1000);
}

function executeFunc(funcs, count, sum, req, res) {
    if (count == sum) {
        return;
    } else {
        funcs[count](req, req, function() {
            count++;
            executeFunc(funcs, count, sum, req, res);
        });
    }
}

//同步调用
var req = null;
var res = null;
var funcs = [func1, func2, func3];
var len = funcs.length;
executeFunc(funcs, 0, len, req, res);
