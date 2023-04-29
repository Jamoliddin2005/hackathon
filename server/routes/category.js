const router = require("express").Router()
const controll = require("../controller/category.js")

router.post("/create", controll.create)
router.get("/find", controll.find)

module.exports = router