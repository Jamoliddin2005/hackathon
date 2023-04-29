const router = require("express").Router()
const controll = require("../controller/teams.js")

router.post("/create", controll.create)
router.put("/update/:id", controll.update)
router.get("/", controll.find)
router.delete("/:id", controll.delete)

module.exports = router