import express from "express";
import {
  index,
  store,
  update,
  destroy,
} from "../../controllers/app/task/chatController.js";

const router = express.Router();

// Index by task
router.get("/:taskId", index);
// Store
router.post("/:taskId", store);
// Update
router.patch("/:messageId", update);
// Destroy
router.delete("/:messageId", destroy);

export default router;
