const db = require("./db");

const createTables = async () => {
  try {
    const connection = await db.getConnection();

    await connection.query(`
      CREATE TABLE IF NOT EXISTS salon (
        salon_id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        address VARCHAR(255) NOT NULL,
        city VARCHAR(255) NOT NULL,
        state VARCHAR(255) NOT NULL,
        zip VARCHAR(10) NOT NULL,
        user_id INT,
        FOREIGN KEY (user_id) REFERENCES users(UserID)
      )
    `);
    console.log("salon created");
    await connection.query(`
      CREATE TABLE IF NOT EXISTS services_provided(
        service_id INT,
        salon_id INT,
        PRIMARY KEY (service_id, salon_id),
        FOREIGN KEY (service_id) REFERENCES services(service_id),
        FOREIGN KEY (salon_id) REFERENCES salon(salon_id)
      )
    `);
    console.log("service_p created");
    await connection.query(`
      CREATE TABLE IF NOT EXISTS services(
        service_id INT AUTO_INCREMENT PRIMARY KEY,
        service_name VARCHAR(255) NOT NULL,
        price DECIMAL(10, 2) NOT NULL,
        duration INT NOT NULL,
        category_id INT,
        FOREIGN KEY (category_id) REFERENCES category(category_id)
      )
    `);
    console.log("services created");
    connection.release();
  } catch (error) {
    console.error("Database Error:", error.message);
  }
};

const insertSalon = async (salonData) => {
  try {
    const connection = await db.getConnection();

    const [result] = await connection.query(
      "INSERT INTO salon (name, address, city, state, zip, user_id) VALUES (?, ?, ?, ?, ?, ?)",
      [
        salonData.salonName,
        salonData.address,
        salonData.city,
        salonData.state,
        salonData.zip,
        salonData.userId,
      ]
    );

    connection.release();
    return result.insertId;
  } catch (error) {
    console.error("Insert Salon Error:", error.message);
    throw error;
  }
};

const insertService = async (serviceData) => {
  try {
    const connection = await db.getConnection();

    // console.log(serviceData);
    await connection.query(
      "INSERT INTO services_provided(service_id, salon_id) VALUES (?, ?)",
      [serviceData.serviceId, serviceData.salonId]
    );
    connection.release();
  } catch (error) {
    console.error("Insert Services Error:", error.message);
    throw error;
  }
};

module.exports = {
  createTables,
  insertSalon,
  insertService,
};
