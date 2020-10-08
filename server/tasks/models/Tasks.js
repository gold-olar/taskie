const mongoose = require("mongoose");

const { Schema } = mongoose;

const taskSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
    unique: true,
  },
  userId: {
    type: String,
    required: true,
  },
  collectionId: {
    type: String,
    required: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const taskModel = mongoose.model("Task", taskSchema);

module.exports = taskModel;
