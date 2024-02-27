express = require("express");

const AdminController = require("../controllers/admin_controller");

const router = express.Router();

router.get("/services", AdminController.getServices);

router.get("/packages", AdminController.getPackages);

router.get("/notifications", AdminController.getNotifications);

router.get("/banners", AdminController.getBanners);

router.post("/notification", AdminController.createNotification);

router.post("/service", AdminController.createService);

router.post("/package", AdminController.createPackage);

router.post("/banner", AdminController.createBanner);

router.put("/notification", AdminController.updateNotification);

router.put("/service", AdminController.updateService);

router.put("/package", AdminController.updatePackage);

router.put("/banner", AdminController.updateBanner);

router.delete("/notification", AdminController.deleteNotification);

router.delete("/service", AdminController.deleteService);

router.delete("/package", AdminController.deletePackage);

router.delete("/banner", AdminController.deleteBanner);


module.exports = router;
