const express = require("express");

const router = express.Router();
const { getAllProducts } = require("../controllers/products");

router.get("/all", getAllProducts);

module.exports = router;
