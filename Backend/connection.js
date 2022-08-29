const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/database_Employee", (err) => {
  if (!err) {
    console.log("Connection successful");
  } else {
    console.log("Connection failed " + err);
  }
});

module.exports = mongoose;
