// servicesController.js
const { getConnection } = require("../models/db");

const getAllServices = async (req, res) => {
  const message = req.query.message; // Assuming the client sends a query parameter ?message=Hello%2C%20server%21

  const query = `
    SELECT s.service_id, s.service_name, s.price, s.duration, c.category_id, c.name AS category_name
    FROM services s
    JOIN category c ON s.category_id = c.category_id
    order by c.name
  `;

  try {
    const connection = await getConnection();
    const [rows, fields] = await connection.execute(query);
    connection.release(); // Release the connection back to the pool
    // console.log(rows[0]);
    // console.log("Services data fetched", message);
    res.json(rows);
  } catch (error) {
    console.error("Error executing query:", error);
    res.status(500).json({ error: error.message });
  }
};

const getAllSalon = async (req, res) => {
  const query = `Select *from salon`;

  try {
    const connection = await getConnection();

    const [rows, fields] = await connection.execute(query);
    connection.release(); // Release the connection back to the pool
    // console.log("Salon data fetched");
    res.json(rows);
  } catch (error) {
    console.error("Error executing query:", error);
    res.status(500).json({ error: error.message });
  }
};

const getSalonData = async (req, res) => {
  const salonId = req.params.salon_id; // Extract salon_id from request parameters

  const query = `
    SELECT 
      s.salon_id,
      s.name AS salon_name,
      s.city,
      s.user_id,
      u.Name as Owned_by,
      sp.service_id,
      sv.service_name,
      sv.price,
      sv.duration,
      c.name as category_name
    FROM 
      services_provided sp
    JOIN 
      salon s ON sp.salon_id = s.salon_id
    JOIN 
      services sv ON sp.service_id = sv.service_id
    JOIN
      users u ON u.UserID = s.user_id
    JOIN
      category c ON c.category_id = sv.category_id
    WHERE 
      s.salon_id = ?
    ORDER BY 
      c.name
  `;

  try {
    const connection = await getConnection();

    const [rows, fields] = await connection.execute(query, [salonId]); // Pass salonId as a parameter
    connection.release(); // Release the connection back to the pool

    res.json(rows);
  } catch (error) {
    console.error("Error executing query:", error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllServices,
  getAllSalon,
  getSalonData,
};
