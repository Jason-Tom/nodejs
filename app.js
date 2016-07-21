var mysql = require('mysql');
var conn = mysql.createConnection({
    host: 'localhost',
    user: 'nodejs',
    password: 'nodejs',
    database:'nodejs',
    port: 3306
});
conn.connect();
conn.query('select `name` FROM t_user', function(err, rows, fields) {
  // query前面是查询语句，后面是封装的方法，第一个是异常检测，第二个是结果集
    if (err) throw err;
    console.log('The name is: ', rows[1].name);
});
conn.end();