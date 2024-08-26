const mongoose = require("mongoose")

const UserSchema = mongoose.Schema({
  email: String,
  phoneNumber: Number,
  origin: String,
});

module.exports = mongoose.model("User", UserSchema);
