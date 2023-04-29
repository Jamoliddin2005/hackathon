const router = require("express").Router()
const controll = require("../controller/admin.js")

router.post("/login", controll.login)
router.post("/register", controll.register)

module.exports = router