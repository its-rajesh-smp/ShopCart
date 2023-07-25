const express = require("express")
const productController = require("../controller/products")
const router = express.Router()


router.post("/addProduct", productController.addProduct)
router.post("/getProduct", productController.getProduct)



module.exports = router