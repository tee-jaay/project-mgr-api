import express from "express";
import {
  index,
  store,
  show,
  update,
  destroy,
  tasksByProjectId,
} from "../../controllers/app/task/taskController.js";

const router = express.Router();

// Index
router.get("/", index);
// Store
router.post("/", store);
// Show
router.get("/:taskId", show);
// Update
router.patch("/:taskId", update);
// Destroy
router.delete("/:taskId", destroy);
// Tasks by project
router.get("/project/:projectId", tasksByProjectId);

export default router;
