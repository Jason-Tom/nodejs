var mysql = require('mysql');
var conn = mysql.createConnection({
    host: 'localhost',
    user: 'nodejs',
    password: 'nodejs',
    database:'nodejs',
    port: 3306
});
conn.connect();
conn.query('INSERT INTO t_user (name,lalala) VALUES (22,22)', function (err0, res0) {
    if (err0) console.log(err0);
    console.log("DELETE Return ==> ");
    console.log(res0);
});
conn.end();
