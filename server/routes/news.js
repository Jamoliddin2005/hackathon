const router = require("express").Router();
const controll = require("../controller/news.js");
const FileUploader = require("../middleware/FileUploader.js");

router.get("/:id", controll.getById)
router.post("/create",FileUploader.single("img"), controll.create)
router.delete("/delete/:id", controll.delete)

module.exports = router