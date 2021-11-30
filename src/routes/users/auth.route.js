import express from "express";
import {
  register,
  login,
  logout,
  passwordUpdate,
} from "../../controllers/auth/authController.js";

const router = express.Router();

// Register
router.post("/register", register);
// Login
router.post("/login", login);
// Password update
router.patch("/password-update", passwordUpdate);
// Logout
router.post("/logout", logout);

export default router;
