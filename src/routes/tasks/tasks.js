import express from "express";
import {
  index,
  store,
  show,
  update,
  destroy,
  tasksByProjectId,
} from "../../controllers/app/task/taskController.js";
import { verifyTokenAndAdmin } from "../../middlewares/verifyToken.js";

const router = express.Router();

// Index
router.get("/", index);
// Store
router.post("/", verifyTokenAndAdmin, store);
// Show
router.get("/:taskId", show);
// Update
router.patch("/:taskId", verifyTokenAndAdmin, update);
// Destroy
router.delete("/:taskId", verifyTokenAndAdmin, destroy);
// Tasks by project
router.get("/project/:projectId", tasksByProjectId);

export default router;
