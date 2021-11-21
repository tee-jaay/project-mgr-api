import express from "express";
import {
  index,
  store,
  destroy,
} from "../../controllers/app/task/chatController.js";

const router = express.Router();

// Index by task
router.get("/:taskId", index);
// Store
router.post("/:taskId", store);
// Destroy
router.delete("/:messageId", destroy);

export default router;
