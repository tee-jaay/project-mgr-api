import express from "express";
import {
  index,
  store,
  show,
  update,
  destroy,
} from "../../controllers/auth/user/userController.js";

const router = express.Router();

// Index
router.get("/", index);
// Store
router.post("/", store);
// Show
router.get("/:id", show);
// Update
router.patch("/:id", update);
// Destroy
router.delete("/:id", destroy);

export default router;
