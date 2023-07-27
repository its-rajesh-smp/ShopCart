const express = require("express")
const productController = require("../controller/products")
const router = express.Router()


router.post("/addProduct", productController.addProduct)
router.get("/getProductsByCategory/:category/:skip/:minPrice/:maxPrice/:rating/:sortBy", productController.getProductsByCategory)



module.exports = router