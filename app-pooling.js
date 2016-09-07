var mysql = require('mysql');
var pool = mysql.createPool({
    host: 'localhost',
    user: 'nodejs',
    password: 'nodejs',
    database: 'nodejs',
    port: 3306
});

var selectSQL = 'select * from t_user limit 10';
// 变量形式输入

pool.getConnection(function (err, conn) {
    // 连接已经直接创建好了，直接调用就行
    if (err) console.log("POOL ==> " + err);

    conn.query(selectSQL,function(err,rows){
        if (err) console.log(err);
        console.log("SELECT ==> ");
        for (var i in rows) {
            console.log(rows[i]);
        }
        conn.release();
        // 用完要释放
    });
});
// 什么用？