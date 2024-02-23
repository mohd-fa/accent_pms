const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bannerSchema = new Schema({
  action_url: {
    type: String,
  },
  image: {
    type: Buffer,
    required: true,
  },
  description: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Banner = mongoose.model("banners", bannerSchema);
module.exports = Banner;
