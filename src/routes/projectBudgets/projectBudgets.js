import express from "express";
import { verifyLogin } from "../../app/middleware.js";
import {
  index,
  store,
  show,
  update,
  destroy,
} from "../../controllers/app/project/projectBudgetController.js";
import { verifyTokenAndAdmin } from "../../middlewares/verifyToken.js";

const router = express.Router();

// Index
router.get("/", index);
// Store
router.patch("/:projectId", verifyTokenAndAdmin, store);
// Show
router.get("/:slug", show);
// Update
router.patch("/:slug", verifyTokenAndAdmin, update);
// destroy
router.delete("/:slug", verifyTokenAndAdmin, destroy);

export default router;
