const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const { verifyToken, checkRole } = require("../middleware/authMiddleware");
const loginController = require("../controllers/authController");

router.post("/login", loginController.LoginHehe);

router.get(
  "/testAuthen",
  verifyToken,
  checkRole([1, 2]),
  loginController.protected,
);

module.exports = router;
