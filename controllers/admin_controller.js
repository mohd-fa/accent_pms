const Notification = require("../models/Notification.model");
const Package = require("../models/Package.model");
const Service = require("../models/Service.model");
const Banner = require("../models/Banners.model");

module.exports = {
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
  updatePackage: async (req, res, next) => {
    try {
      const updatedPackage = await Package.findByIdAndUpdate(
        req.body.id,
        req.body,
        { new: true }
      );
      res.json({ updatedPackage });
    } catch (error) {
      next(error);
    }
  },
  updateService: async (req, res, next) => {
    try {
      const updatedService = await Service.findByIdAndUpdate(
        req.body.id,
        req.body,
        { new: true }
      );
      res.json({ updatedService });
    } catch (error) {
      next(error);
    }
  },
  updateNotification: async (req, res, next) => {
    try {
      const updatedNotification = await Notification.findByIdAndUpdate(
        req.body.id,
        req.body,
        { new: true }
      );
      res.json({ updatedNotification });
    } catch (error) {
      next(error);
    }
  },
  updateBanner: async (req, res, next) => {
    try {
      const updatedBanner = await Banner.findByIdAndUpdate(
        req.body.id,
        req.body,
        { new: true }
      );
      res.json({ updatedBanner });
    } catch (error) {
      next(error);
    }
  },
  deletePackage: async (req, res, next) => {
    try {
      const deletedPackage = await Package.findByIdAndDelete(req.body.id);
      res.json({ deletedPackage });
    } catch (error) {
      next(error);
    }
  },
  deleteService: async (req, res, next) => {
    try {
      const deletedService = await Service.findById;
      AndDelete(req.body.id);
      res.json({ deletedService });
    } catch (error) {
      next(error);
    }
  },
  deleteNotification: async (req, res, next) => {
    try {
      const deletedNotification = await Notification.findByIdAndDelete(
        req.body.id
      );
      res.json({ deletedNotification });
    } catch (error) {
      next(error);
    }
  },
  deleteBanner: async (req, res, next) => {
    try {
      const deletedBanner = await Banner.findByIdAndDelete(req.body.id);
      res.json({ deletedBanner });
    } catch (error) {
      next(error);
    }
  },
};
