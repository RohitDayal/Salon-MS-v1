const mysql = require("mysql2/promise");
require("dotenv").config();

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 120,
});

const getConnection = async () => {
  try {
    const connection = await pool.getConnection();
    console.log("DB Connected");
    return connection;
  } catch (error) {
    console.error("DB Connection Error:", error.message);
    throw error;
  }
};

module.exports = { getConnection };
