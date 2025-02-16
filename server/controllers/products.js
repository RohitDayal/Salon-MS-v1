const { getConnection } = require("../models/db");


const getAllProducts = async (req, res) => {
  const query = `Select *from products`;

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


module.exports = {
    getAllProducts,
};
