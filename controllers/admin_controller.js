const Notification = require("../models/Notification.model");
const Package = require("../models/Package.model");
const Service = require("../models/Service.model");
const Banner = require("../models/Banners.model");

module.exports = {
  getUsers: async (req, res, next) => {
    try {
      const users = await User.find({ role: "client" }, "phone email name");
      res.json({ users });
    } catch (error) {
      next(error);
    }
  },
  getNotifications: async (req, res, next) => {
    try {
      const notifications = await Notification.find();
      res.json({ notifications });
    } catch (error) {
      next(error);
    }
  },
  getBanners: async (req, res, next) => {
    try {
      const banners = await Banner.find();
      res.json({ banners });
    } catch (error) {
      next(error);
    }
  },
  getPackages: async (req, res, next) => {
    try {
      const packages = await Package.find();
      res.json({ packages });
    } catch (error) {
      next(error);
    }
  },
  getServices: async (req, res, next) => {
    try {
      const services = await Service.find();
      res.json({ services });
    } catch (error) {
      next(error);
    }
  },
  createPackage: async (req, res, next) => {
    try {
      const package = new Package(req.body);
      const savedPackage = await package.save();
      res.json({ savedPackage });
    } catch (error) {
      next(error);
    }
  },
  createService: async (req, res, next) => {
    try {
      const service = new Service(req.body);
      const savedService = await service.save();
      res.json({ savedService });
    } catch (error) {
      next(error);
    }
  },
  createNotification: async (req, res, next) => {
    try {
      const notification = new Notification(req.body);
      const savedNotification = await notification.save();
      res.json({ savedNotification });
    } catch (error) {
      next(error);
    }
  },
  createBanner: async (req, res, next) => {
    try {
      const banner = new Banner(req.body);
      const savedBanner = await banner.save();
      res.json({ savedBanner });
    } catch (error) {
      next(error);
    }
  },
};
