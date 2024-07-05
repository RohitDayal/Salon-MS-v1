const saveSalon = (req, res) => {
  const salonData = req.body;

  // Here, you can add the logic to save the data to a database
  console.log("Received Data:", salonData);

  // For demonstration, we'll send a success response
  res.status(201).json({
    message: "Data received successfully!",
    data: salonData,
  });
};

module.exports = {
  saveSalon,
};
