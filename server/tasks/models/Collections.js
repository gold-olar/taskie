const mongoose = require("mongoose");

const { Schema } = mongoose;

const collectionSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const collectionModel = mongoose.model("Collection", collectionSchema);

module.exports = collectionModel;
