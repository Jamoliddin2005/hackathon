const router = require("express").Router()
const category = require("../controller/category.js")
const list = require("../controller/list.js")

router.get("/categories", category.get)
router.get("/list", list.get)


module.exports = router