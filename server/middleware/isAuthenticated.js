const jwt = require("jsonwebtoken");
const { getConnection } = require("../models/db");



const SECRET_KEY = "dtYWlsLmNvbSIsIk5hbWUiOiJSb2hpdCBEYXlhbCIsIlVzZXJOYW1lIjo";

// Middleware to verify token and check user ID in database
async function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    const UserId = decoded.id;
    // Check if user ID exists in the database
    const connection = await getConnection();
    try {
  
      const [results] = await connection.query(
        "SELECT * FROM users WHERE UserID = ?",
        [UserId]
      );
      connection.release();
      if (results.length === 0) {
        return res.status(404).json({ message: "User not found" });
      }

      // User exists, proceed to the next middleware or route handler
      req.user = results[0];
      console.log("verify successfully");
      next();
    } catch (dbError) {
      connection.release();
      return res.status(500).json({ message: "Database query error" });
    }
  } catch (tokenError) {
    return res.status(401).json({ message: "Failed to authenticate token" });
  }
};
module.exports = {
    authenticateToken,
};