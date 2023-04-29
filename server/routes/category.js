const router = require("express").Router()
const controll = require("../controller/category.js")

router.post("/create", controll.create)
router.post("/create/new/team/:id", controll.newCreateTeam)
router.post("/create/old/team/:id", controll.oldCreateTeam)
router.get("/find", controll.find)

module.exports = router