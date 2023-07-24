const express = require("express")
const authController = require("../controller/auth")

const router = express.Router()


router.post("/createNewUser", authController.createNewUser)
router.post("/loginExistingUser", authController.loginExistingUser)
router.post("/getExistingUser", authController.getExistingUser)


module.exports = router