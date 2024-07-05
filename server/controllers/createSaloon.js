const { insertSalon, insertService, createTables } = require("../models/createSaloon");

const createSalon = async (req, res) => {
  try {
    // await createTables();
    const salon_id = await insertSalon(req.body);
    console.log(salon_id);
    const servicePromises = [];
    const { services } = req.body;
    for (const category in services) {
      services[category]?.forEach((service_id) => {
        servicePromises.push(
          insertService({
            serviceId: service_id,
            salonId:salon_id,
          })
        );
      });
    }

    await Promise.all(servicePromises);
    console.log("Data save successfully");
    res.status(200).json({ message: "Salon and services added successfully" });
  } catch (error) {
    console.error("Create Salon Error:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};



module.exports = {
  createSalon,
};
