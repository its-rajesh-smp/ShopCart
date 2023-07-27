const express = require("express")
const SliderProductController = require("../controller/sliderProduct")


const router = express.Router()


router.post("/createSliderProduct", SliderProductController.createSliderProduct)
router.get("/getSliderProducts", SliderProductController.getSliderProducts)



module.exports = router