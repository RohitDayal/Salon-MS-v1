const { getConnection } = require("./db");

const createTables = async () => {
  try {
    const connection = await getConnection();

    await connection.query(`
      CREATE TABLE IF NOT EXISTS users (
        UserID INT AUTO_INCREMENT PRIMARY KEY,
        Name VARCHAR(50) NOT NULL,
        UserName VARCHAR(50) NOT NULL UNIQUE,
        Phone_Number VARCHAR(20),
        Email VARCHAR(50) NOT NULL,
        Password VARCHAR(100) NOT NULL
      )
    `);
    console.log("users table created");

    await connection.query(`
      CREATE TABLE IF NOT EXISTS category (
        category_id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL
      )
    `);
    console.log("category table created");

    await connection.query(`
      CREATE TABLE IF NOT EXISTS salon (
        salon_id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        address VARCHAR(255) NOT NULL,
        city VARCHAR(255) NOT NULL,
        state VARCHAR(255) NOT NULL,
        zip VARCHAR(10) NOT NULL,
        user_id INT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (user_id) REFERENCES users(UserID)
      )
    `);
    console.log("salon table created");

    await connection.query(`
      CREATE TABLE IF NOT EXISTS services (
        service_id INT AUTO_INCREMENT PRIMARY KEY,
        service_name VARCHAR(255) NOT NULL,
        price DECIMAL(10, 2) NOT NULL,
        duration INT NOT NULL,
        category_id INT,
        FOREIGN KEY (category_id) REFERENCES category(category_id)
      )
    `);
    console.log("services table created");

    await connection.query(`
      CREATE TABLE IF NOT EXISTS services_provided (
        service_id INT,
        salon_id INT,
        PRIMARY KEY (service_id, salon_id),
        FOREIGN KEY (service_id) REFERENCES services(service_id),
        FOREIGN KEY (salon_id) REFERENCES salon(salon_id)
      )
    `);
    console.log("services_provided table created");

    connection.release();
  } catch (error) {
    console.error("Database Error:", error.message);
  }
};

module.exports = createTables;
