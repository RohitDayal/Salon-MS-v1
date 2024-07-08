const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const Razorpay = require("razorpay");

const addSaloonRoute = require("./routes/addSaloon");
const usersRoute = require("./routes/users");
const createSaloon = require("./routes/createSaloon");
const dataServices = require("./routes/dataServices");
const booking = require("./routes/booking");
const paymentRoutes = require("./routes/payment");
const createTables = require("./models/createTables");

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "client", "build")));
// app.use((req, res, next) => {
//   console.log(`${req.method} request for ${req.url}`);
//   next();
// });
app.use("/api/payment", paymentRoutes);
app.use("/api/salon/booking", booking);
app.use("/api/salon", dataServices);
app.use("/api", dataServices);
app.use("/create-saloon", createSaloon);
app.use("/users", usersRoute);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

// Ensure tables are created before starting the server
const port = process.env.PORT || 5000;
const startServer = async () => {
  try {
    await createTables();
    app.listen(port, () => {
      console.log(`Server listening at port:${port}`);
    });
  } catch (error) {
    console.error("Failed to initialize the server:", error);
  }
};

startServer();
