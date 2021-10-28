import express from "express";
import {
  store,
  show,
  update,
  destroy,
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

export default router;
