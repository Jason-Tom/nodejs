var mysql = require('mysql');
var conn = mysql.createConnection({
    host: 'localhost',
    user: 'nodejs',
    password: 'nodejs',
    database:'nodejs',
    port: 3306
});
conn.connect();
conn.query('DELETE from t_user WHERE name = 22', function (err0, res0) {
    if (err0) console.log(err0);
    console.log("DELETE Return ==> ");
    console.log(res0);
});
conn.end();
