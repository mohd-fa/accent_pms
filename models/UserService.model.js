const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userServiceSchema = new Schema({
  user: { type: mongoose.Types.ObjectId, ref: "users", required: true },
  service: { type: mongoose.Types.ObjectId, ref: "services", required: true },
  status: {
    type: String,
    enum: ["active", "pending", "completed"],
    default: "pending",
    required: true,
  },
  enquiryDate: {
    type: Date,
    default: Date.now,
    required: true,
    immutable: true,
  },
  expectedDeliveryDate: { type: Date },
  remarks: { type: String },
});

const UserService = mongoose.model("userServices", userServiceSchema);

module.exports = UserService;
