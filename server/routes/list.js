const router = require("express").Router()
const controll = require("../controller/list.js")

// router.post("/create", controll.create)
router.post("/create/team/:id", controll.createTeam)
router.get("/find", controll.find)

module.exports = router