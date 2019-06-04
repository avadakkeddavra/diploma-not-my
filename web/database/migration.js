require('dotenv').config();
const mysql = require('mysql2');
const migration = require('mysql-migrations');

const connection = mysql.createPool({
  connectionLimit : 10,
  host     : process.env.MIGRATION_HOST,
  port     : 3300,
  user     : 'root',
  password : 'root',
  database : 'schedule'
});

migration.init(connection, __dirname + '/migrations');
