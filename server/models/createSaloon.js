const db = require("./db");

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
  insertSalon,
  insertService,
};
