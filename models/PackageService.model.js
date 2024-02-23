const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const packageServiceSchema = Schema({
  package: { type: mongoose.Types.ObjectId, ref: "packages" },
  service: { type: mongoose.Types.ObjectId, ref: "services" },
});

const PackageService = mongoose.model("packageService", packageServiceSchema);
module.exports = PackageService;
