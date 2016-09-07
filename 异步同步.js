var async = require('async');

// 串行返回JSON();
// 串行返回数组();
// 限制数量并行处理数组();



var arr = [2, 3, 4, 5];
console.log(arr);
console.log(arr.map(function(item) {
    return item * item;
}))


function 串行返回JSON() {

    async.series({
        two: function(callback) {
            console.log('two');
            setTimeout(function() {
                callback(null, 2);
            }, 100);
        },
        one: function(callback) {
            console.log('one');
            setTimeout(function() {
                callback(null, 1);
            }, 200);
        },
    }, function(err, results) {
        console.log(results);
        // results is now equal to: {one: 1, two: 2}
    });
}

function 串行返回数组() {

    async.series([
            function(callback) {
                // do some stuff ...
                console.log('one');
                callback(null, 'one');
            },
            function(callback) {
                // do some more stuff ...
                console.log('two');
                callback(null, 'two');
            }
        ],
        // optional callback
        function(err, results) {
            console.log(results);
            // results is now equal to ['one', 'two']
        });
}

function 同时全部并行处理数组() {
    async.map(['file1', 'file2', 'file3'], function(item, callback) {
        var _time = Math.floor(5 * Math.random());
        setTimeout(function() {
            console.log(`用了${_time}s执行完${item}`);
            callback(null, `用了${_time}s执行完${item}`);
        }, _time * 1000);
    }, function(err, results) {
        // console.log(results);
        // results is now an array of stats for each file
    });
}


function 限制数量并行处理数组() {
    async.mapLimit(['file1', 'file2', 'file3'], 2, function(item, callback) {
        var _time = Math.floor(5 * Math.random());
        setTimeout(function() {
            console.log(`用了${_time}s执行完${item}`);
            callback(null, `用了${_time}s执行完${item}`);
        }, _time * 1000);
    }, function(err, results) {
        // console.log(results);
        // results is now an array of stats for each file
    });
}
