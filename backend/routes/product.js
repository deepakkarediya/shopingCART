const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

router.get("/productList", productController.getAllProducts);
router.post("/addproduct", productController.createProduct);
router.post("/cart", productController.createProductCart);

module.exports = router;
