const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userPackageSchema = new Schema({
  user: { type: mongoose.Types.ObjectId, ref: "users", required: true },
  package: { type: mongoose.Types.ObjectId, ref: "packages", required: true },
  status: {
    type: String,
    enum: ["active", "pending", "completed"],
    default: "pending",
    required: true,
  },
  valid_from: {
    type: Date,
    default: Date.now,
    required: true,
    immutable: true,
  },
  valid_to: { type: Date },
  remarks: { type: String },
});

const UserPackage = mongoose.model("userPackages", userPackageSchema);

module.exports = UserPackage;
