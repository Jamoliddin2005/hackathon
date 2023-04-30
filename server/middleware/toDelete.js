const fs = require("fs");
const path = require("path");

module.exports = (img, res) => {
  if (img) {
    if (typeof img === "object") {
      for (var i = 0; i < img.length; i++) {
        fs.unlink(path.join(__dirname, "../images/" + img[i]), (err, data) => {
          if (err) {
            return;
          }
          return;
        });
      }
    } else {
      fs.unlink(path.join(__dirname, "../images/" + img), (err, data) => {
        if (err) {
          return;
        }
        return;
      });
    }
  }
};
