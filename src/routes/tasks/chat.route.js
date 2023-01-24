import express from "express";
import {
  index,
  store,
  update,
  destroy,
} from "../../controllers/app/task/chatController.js";

const router = express.Router();

// Index by task
router.get("/taskId/:taskId", index);
// Store
router.post("/taskId/:taskId", store);
// Update
router.patch("/messageId/:messageId", update);
// Destroy
router.delete("/messageId/:messageId", destroy);

export default router;
