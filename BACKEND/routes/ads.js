const express = require("express")
const AdsController = require("../controller/ads")


const router = express.Router()


router.post("/createAd", AdsController.createAd)
router.get("/getAds", AdsController.getAds)



module.exports = router