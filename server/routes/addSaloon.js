
const express = require("express");
const { saveSalon } = require("../controllers/addSaloon");

const router = express.Router();

router.post("/", saveSalon);

module.exports = router;
