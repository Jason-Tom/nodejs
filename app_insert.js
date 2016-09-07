var mysql = require('mysql');
var conn = mysql.createConnection({
    host: 'localhost',
    user: 'nodejs',
    password: 'nodejs',
    database: 'nodejs',
    port: 3306
});
conn.connect();
var lalala = 28;
conn.query('INSERT INTO t_user (name,lalala) VALUES (' + lalala + ',23)', function(err0, res0) {
    // 操作添加变量
    // 重复插入有时会报错，看是不是主键问题
    if (err0) console.log(err0);
    console.log("DELETE Return ==> ");
    console.log(res0);
    // 回调函数有一个返回值
});
conn.end();
