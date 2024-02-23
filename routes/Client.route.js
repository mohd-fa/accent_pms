const express = require("express");
const router = express.Router();

const ClientController = require("../controllers/client_controller");

router.post("/bookService", ClientController.bookService);

router.post("/bookPackage", ClientController.bookPackage);