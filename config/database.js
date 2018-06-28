var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "root",
  database: "p2_db"
});

// Export connection for our ORM to use.
module.exports = connection;
