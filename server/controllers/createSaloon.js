// const { insertSalon, insertService, createTables } = require("../models/createSaloon");

// const createSalon = async (req, res) => {
//   try {
//     // await createTables();
//     const salon_id = await insertSalon(req.body);
//     console.log(salon_id);
//     const servicePromises = [];
//     const { services } = req.body;
//     for (const category in services) {
//       services[category]?.forEach((service_id) => {
//         servicePromises.push(
//           insertService({
//             serviceId: service_id,
//             salonId:salon_id,
//           })
//         );
//       });
//     }

//     await Promise.all(servicePromises);
//     console.log("Data save successfully");
//     res.status(200).json({ message: "Salon and services added successfully" });
//   } catch (error) {
//     console.error("Create Salon Error:", error.message);
//     res.status(500).json({ error: "Internal server error" });
//   }
// };

// module.exports = {
//   createSalon,
// };

const { getConnection } = require("../models/db");

const createSalon = async (req, res) => {
  const connection = await getConnection();
  try {
    await connection.beginTransaction();

    const { salonName, address, city, state, zip, userId, services } = req.body;

    // Insert salon data
    const [salonResult] = await connection.query(
      "INSERT INTO salon (name, address, city, state, zip, user_id) VALUES (?, ?, ?, ?, ?, ?)",
      [salonName, address, city, state, zip, userId]
    );
    const salon_id = salonResult.insertId;
    console.log(salon_id);

    // Insert services data
    const servicePromises = [];
    for (const category in services) {
      services[category]?.forEach((service_id) => {
        servicePromises.push(
          connection.query(
            "INSERT INTO services_provided(service_id, salon_id) VALUES (?, ?)",
            [service_id, salon_id]
          )
        );
      });
    }

    await Promise.all(servicePromises);

    await connection.commit();
    console.log("Data saved successfully");
    res.status(201).json({ message: "Salon and services added successfully" });
  } catch (error) {
    await connection.rollback();
    console.error("Create Salon Error:", error.message);
    res.status(500).json({ error: "Internal server error" });
  } finally {
    connection.release();
  }
};

module.exports = {
  createSalon,
};
