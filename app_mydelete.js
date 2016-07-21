var mysql = require('mysql');
var conn = mysql.createConnection({
    host: 'localhost',
    user: 'nodejs',
    password: 'nodejs',
    database:'nodejs',
    port: 3306
});
conn.connect();
conn.query('delete from t_user', function (err0, res0) {
    if (err0) console.log(err0);
    console.log("DELETE Return ==> ");
    console.log(res0);
});
conn.end();