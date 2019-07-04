const mysql = require('mysql');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'mysql-crud-project'
});

module.exports=connection;