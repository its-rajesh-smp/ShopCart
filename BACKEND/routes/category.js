const express = require("express")
const categoryController = require("../controller/category")

const router = express.Router()


router.post("/addCategory", categoryController.addCategory)
router.post("/getCategory", categoryController.getCategory)


module.exports = router