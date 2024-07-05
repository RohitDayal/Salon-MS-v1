const express = require("express");
const router = express.Router();
const {
  getAllServices,
  getAllSalon,
  getSalonData,
} = require("../controllers/dataServices");
const { authenticateToken } = require("../middleware/isAuthenticated");

router.get("/services", getAllServices);
router.get("/all", getAllSalon);
router.get("/data/:salon_id", getSalonData);

module.exports = router;
