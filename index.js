const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'beatles',
  port: 8889
});

connection.connect();

connection.query('SELECT id, name, part FROM member',
  (err, result) => {
    if (err) throw err;
    console.log(result);
});

connection.end();
