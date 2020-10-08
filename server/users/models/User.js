const mongoose = require("mongoose");

const { Schema } = mongoose;

const userSchema = new Schema({
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  registeredAt: {
    type: Date,
    default: Date.now,
  },
});

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;
