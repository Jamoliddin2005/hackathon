const router = require("express").Router();
const category = require("../controller/category.js");
const list = require("../controller/list.js");
const { verifyToken } = require("../controller/admin.js");

router.get("/categories", category.get);
router.get("/list", list.get);
router.get("/verify", verifyToken)

module.exports = router;
