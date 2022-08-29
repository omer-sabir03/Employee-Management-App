const mongoose = require("mongoose");

const empSchema = new mongoose.Schema({
  Name: String,
  Designation: String,
  Address: String,
});

const empModel = mongoose.model("EmployeeDataBase", empSchema);

module.exports = empModel;
