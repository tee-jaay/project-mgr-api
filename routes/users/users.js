import express from "express";
import {
  index,
  show,
  update,
  destroy,
} from "../../controllers/user/userController.js";

const router = express.Router();

// Index
router.get("/", index);
// Show
router.get("/:id", show);
// Update
router.patch("/:id", update);
// Destroy
router.delete("/:id", destroy);

export default router;
