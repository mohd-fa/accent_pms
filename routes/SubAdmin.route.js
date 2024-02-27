express = require("express");

const SubAdminController = require("../controllers/subadmin_controller");

const router = express.Router();

router.get("/users", SubAdminController.getUsers);

router.post("/user", SubAdminController.createUser);

router.put("/user", SubAdminController.updateUser);

router.delete("/user", SubAdminController.deleteUser);


module.exports = router;
