var Step = require('step');
var async = require('async');
var func1 = function(callback) {
    setTimeout(function() {
        console.log('in func1');
        callback();
        // 为什么要有callback
    }, 3000);
}
var func2 = function(callback) {
    setTimeout(function() {
        console.log('in func2');
        callback();
    }, 2000);
}

var func3 = function(callback) {
    setTimeout(function() {
        console.log('in func3');
        callback();
    }, 1000);
}
var req = null;
var res = null;
var callback = function() {};

async.series(
    [
        function(callback) {
            func1(callback);
        },
        function(callback) {
            func2(callback);
        },
        function(callback) {
            func3(callback);
        }
    ]
);
// func1();
// func2();
// func3();
