const express = require("express");
const router = express.Router();
const { getTimeSlots } = require("../controllers/booking");

router.get("/timeslots/:salonId", getTimeSlots);

module.exports = router;
