const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "db_pelis",
});

connection.connect((err) => {
  if (err) console.log("Error: ", err);
  else console.log("DB Connected...");
});

module.exports = connection;
