const UserService = require("../models/UserService.model");
const UserPackage = require("../models/UserPackage.model");
const Service = require("../models/Service.model");
const Package = require("../models/Package.model");
const User = require("../models/User.model");

module.exports = {
  bookService: async (req, res, next) => {
    try {
      const { service: serviceId } = req.body;
      const userId = req.payload.aud;
      const service = await Service.findById(serviceId);
      if (!service) {
        return next(createError.NotFound("Service not found"));
      }
      const user = await User.findById(userId);
      if (!user) {
        return next(createError.NotFound("User not found"));
      }
      const userService = new UserService({
        user,
        service,
      });
      const savedUserPackage = await userService.save();
      res.json({ savedUserPackage });
    } catch (error) {
      next(error);
    }
  },
  bookPackage: async (req, res, next) => {
    try {
      const { package: packageId } = req.body;
      const userId = req.payload.aud;
      const package = await Package.findById(packageId);
      if (!package) {
        return next(createError.NotFound("Package not found"));
      }
      const user = await User.findById(userId);
      if (!user) {
        return next(createError.NotFound("User not found"));
      }
      const userPackage = new UserPackage({
        user,
        package,
      });
      const savedUserPackage = await userPackage.save();
      res.json({ savedUserPackage });
    } catch (error) {
      next(error);
    }
  },
};
