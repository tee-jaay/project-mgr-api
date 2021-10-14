import express from "express";
import {
  register,
  login,
  logout,
  fakerRegisters,
} from "../../controllers/auth/authController.js";

const router = express.Router();

// Register
router.post("/register", register);
// Login
router.post("/login", login);
// Logout
router.post("/logout", logout);

// Faker
router.get("/faker-registers", fakerRegisters);

export default router;
