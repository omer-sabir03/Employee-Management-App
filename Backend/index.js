const express = require("express");
const mongoose = require("./connection.js");
const cors = require("cors");
const routes = require("./routes/routes.js");

const app = express();

app.use(express.json());
app.use(cors({ origin: "http://localhost:4200" }));
app.listen(9000, () => {
  console.log("Server Started at port 9000");
});
app.use("/employees", routes);
