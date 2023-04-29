const express = require("express");
require("dotenv").config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/admin", require("./routes/admin.js"));
app.use(require("./middleware/acces.js"))
app.use("/team", require("./routes/teams.js"))
app.use("/category", require("./routes/category.js"))
app.use(require("./middleware/error.js"))



const port = process.env.PORT || 5000;
const uri = process.env.URI
require("./helper/connect.js")(uri)
app.listen(port, () => {
  console.log("Server working on " + port);
});
