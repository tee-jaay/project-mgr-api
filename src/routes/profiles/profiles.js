import express from "express";
import {
  store,
  show,
  update,
  destroy,
  getProfileByUserId,
} from "../../controllers/user/profileController.js";

const router = express.Router();

// Create
router.post("/", store);
// Show
router.get("/:id", show);
// Update
router.patch("/:id", update);
// Destroy
router.delete("/:id", destroy);
// Profile by user id
router.get("/user/:userId", getProfileByUserId);

export default router;
