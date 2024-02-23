const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const serviceSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: Buffer,
  },
  long_description: {
    type: String,
    required: true,
  },
  short_description: {
    type: String,
    required: true,
  },
  homepage_visibility: {
    type: Boolean,
    default: false,
  },
});

const Service = mongoose.model("services", serviceSchema);
module.exports = Service;
