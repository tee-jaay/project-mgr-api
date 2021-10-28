import express from "express";
import {
  index,
  store,
  show,
  update,
  destroy,
  todosByTask,
} from "../../controllers/app/todo/todoController.js";

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
// Get
router.get("/task/:taskId", todosByTask);

export default router;
