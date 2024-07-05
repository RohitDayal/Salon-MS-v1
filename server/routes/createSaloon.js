const express = require("express");
const router = express.Router();
const { createSalon } = require("../controllers/createSaloon");
const { authenticateToken } = require("../middleware/isAuthenticated");

router.post("/", createSalon);
module.exports = router;
