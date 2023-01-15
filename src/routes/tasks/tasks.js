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
router.get("/taskId/:taskId", show);
// Update
router.patch("/taskId/:taskId", verifyTokenAndAdmin, update);
// Destroy
router.delete("/taskId/:taskId", verifyTokenAndAdmin, destroy);
// Tasks by project
router.get("/projectId/:projectId", tasksByProjectId);

export default router;
