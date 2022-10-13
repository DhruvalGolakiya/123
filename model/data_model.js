const mongoose = require("mongoose");

const userModel = mongoose.Schema({
  FirstName: String,
  LastName: String,
  Username: String,
  Password:String,
  Age: Number,
});

module.exports = mongoose.model("userModel", userModel);
