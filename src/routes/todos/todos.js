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
router.get("/:todoId", show);
// Update
router.patch("/:todoId", update);
// Destroy
router.delete("/:todoId", destroy);
// Get
router.get("/task/:taskId", todosByTask);

export default router;
