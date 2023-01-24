import express from "express";
import {
  index,
  store,
  show,
  update,
  destroy,
} from "../../controllers/app/project/projectController.js";
import { verifyTokenAndAdmin } from "../../middlewares/verifyToken.js";

const router = express.Router();

// Index
router.get("/", index);
// Store
router.post("/", verifyTokenAndAdmin, store);
// Show
router.get("/:projectId", show);
// Update
router.patch("/:projectId", verifyTokenAndAdmin, update);
// destroy
router.delete("/:projectId", verifyTokenAndAdmin, destroy);

export default router;
