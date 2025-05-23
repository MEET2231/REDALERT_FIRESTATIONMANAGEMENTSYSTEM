const mysql = require("mysql2");
const fs = require("fs");
const path = require("path");
require("dotenv").config();

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.PORT || 3306,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  ssl: {
    ca: fs.readFileSync(path.join(__dirname, "..", "certs", "ca.pem")),
    rejectUnauthorized: true
  }
});

module.exports = pool.promise();
