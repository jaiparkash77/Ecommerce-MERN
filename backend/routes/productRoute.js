const express = require("express");
const { getAllProducts } = require("../controllers/productController");

const router = express.Router();

// create route 1st
router.route("/products").get(getAllProducts);

module.exports = router