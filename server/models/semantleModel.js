const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const similarWordSchema = new Schema({
  simWord: {
    type: String,
    required: true,
  },
  rank: {
    type: Number,
    required: true,
  },
  similarity: {
    type: Number,
    required: true,
  },
});

const semantleSchema = new Schema({
  word: {
    type: String,
    required: true,
  },
  similarities: [similarWordSchema],
});

module.exports = mongoose.model("semantle", semantleSchema);
