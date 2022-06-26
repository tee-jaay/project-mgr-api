import express from "express";
import {
  index,
  store,
  update,
  destroy,
} from "../../controllers/app/project/projectAssigneeController.js";
import { verifyTokenAndAdmin } from "../../middlewares/verifyToken.js";

const router = express.Router();

// Index
router.get("/", index);
// Store
router.patch("/:projectId", verifyTokenAndAdmin, store);
// Update
router.patch("/:slug", verifyTokenAndAdmin, update);
// destroy
router.delete("/:slug", verifyTokenAndAdmin, destroy);

export default router;
