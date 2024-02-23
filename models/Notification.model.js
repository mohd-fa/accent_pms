const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const notifSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  action_url: {
    type: String,
  },
  image: {
    type: Buffer,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Notification = mongoose.model("notifications", notifSchema);
module.exports = Notification;
