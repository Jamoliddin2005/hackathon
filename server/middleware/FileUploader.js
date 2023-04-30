const multer = require("multer");
const moment = require("moment");
const path = require("path");

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, path.join(__dirname, "../images/"));
  },
  filename(req, file, cb) {
    const date = moment().format("DDMMYYYY-HHmmss_SSS");
    cb(null, `${date}-${file.fieldname}.jpg`);
  },
});

const fileFilter = (req, file, cb) => {
  const allowedTypes = [
    "img/png",
    "img/jpeg",
    "img/jpg",
    "img/webp",
    "img/jfif",
    "img/ai",
    "img/eps",
    "img/gif",
    "img/psd",
    "img/tiff",
    "img/bmp",
    "img/pdf",
  ];
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

module.exports = multer({
  storage,
  fileFilter,
});
